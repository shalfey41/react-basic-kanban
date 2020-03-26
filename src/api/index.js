import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCOQlL4ImWDyGyG3yq1QzCpoEL7Kcmh46w",
    authDomain: "kanban-efd5b.firebaseapp.com",
    databaseURL: "https://kanban-efd5b.firebaseio.com",
    projectId: "kanban-efd5b",
    storageBucket: "kanban-efd5b.appspot.com",
    messagingSenderId: "248459954323",
    appId: "1:248459954323:web:772d44761733f23afa2566",
    measurementId: "G-6GZ5H2FY0R"
  });
  firebase.analytics();
};

const createDesk = (name) => {
  const db = firebase.firestore();

  return db.collection('desks')
    .add({ name })
    .then((docRef) => docRef.get());
};

const getDesks = () => {
  const db = firebase.firestore();

  return db.collection('desks').get()
    .then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      return desks;
  });
};

const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection('desks')
    .doc(id)
    .delete();
};

const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db.collection('columns').where('deskId', '==', deskId).get()
    .then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach((doc) => {
        const { deskId, name } = doc.data();

        columns.push({
          id: doc.id,
          deskId,
          name,
        });
      });

      return columns;
    });
};

const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection('columns')
    .doc(id)
    .delete();
};

const getCards = (columnId) => {
  const db = firebase.firestore();

  return db.collection('cards').where('columnId', '==', columnId).get()
    .then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();

        cards.push({
          id: doc.id,
          columnId,
          name,
        });
      });

      return cards;
    });
};

const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection('cards')
    .doc(id)
    .delete();
};

const createCard = (name, columnId) => {
  const db = firebase.firestore();

  return db.collection('cards')
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

const createColumn = (name, deskId) => {
  const db = firebase.firestore();

  return db.collection('columns')
    .add({ name, deskId })
    .then((docRef) => docRef.get());
};

export const api = {
  createDesk,
  getDesks,
  deleteDesk,
  getColumns,
  deleteColumn,
  getCards,
  deleteCard,
  createCard,
  createColumn,
};
