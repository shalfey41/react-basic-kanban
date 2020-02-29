import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";

import CreateForm from "../CreateForm/CreateForm";

const DeskCreate = ({ onCreate }) => {
  const createDesk = (name) => {
    const db = firebase.firestore();

    return db.collection('desks')
      .add({ name })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createDesk}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
