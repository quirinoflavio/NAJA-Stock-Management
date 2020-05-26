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

function get(collection, name) {
  if (name) {
    return db.collection(collection).doc(name).get()
      .then((doc) => (doc.exists ? { id: doc.id, data: doc.data() } : undefined));
  }

  return db.collection(collection).get().then((res) => {
    const categories = [];
    res.forEach((doc) => {
      categories.push({ id: doc.id, data: doc.data() });
    });
    return categories;
  });
}

export {
  submit, remove, update, get,
};
