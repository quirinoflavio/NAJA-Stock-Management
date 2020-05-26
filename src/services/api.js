import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function submit(collection, data) {
  db.collection(collection)
    .doc(data.name)
    .set(data)
    .then((res) => console.log(res));
}

function remove(collection, data) {
  db.collection(collection)
    .doc(data)
    .delete()
    .then((res) => console.log(res));
}

function update(collection, name, data) {
  db.collection(collection)
    .doc(name)
    .update(data)
    .then((res) => console.log(res));
}

async function uploadImage(path, name, blob) {
  const ref = firebase.storage().ref().child(`${path}/${name}`);
  return ref.put(blob);
}

export {
  submit, remove, update, uploadImage,
};
