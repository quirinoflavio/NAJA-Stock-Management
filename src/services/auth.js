import * as Google from 'expo-google-app-auth';
import { auth } from 'firebase';
import { androidClientId } from './config';

function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    const { providerData } = firebaseUser;
    for (let i = 0; i < providerData.length; i += 1) {
      if (providerData[i].providerId === auth.GoogleAuthProvider.PROVIDER_ID
          && providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      const credential = auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken,
      );
      // Sign in with credential from the Google user.
      auth()
        .signInWithCredential(credential)
        .then(console.log('user signed in'))
        .catch((error) => {
        // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const { email } = error;
          // The firebase.auth.AuthCredential type that was used.
          const { credential: cred } = error;

          console.log('Error \n', errorCode, errorMessage, email, cred);
        // ...
        });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      // behavior: 'web',
      androidClientId,
      // iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result);
      return result.accessToken;
    }
    return { cancelled: true };
  } catch (e) {
    return { error: true };
  }
}

function signOut() {
  auth().signOut();
}

function currentUser() {
  const user = auth().currentUser;
  return user ? { name: user.displayName, email: user.email, photoURL: user.photoURL } : undefined;
}

export { signInWithGoogleAsync, signOut, currentUser };
