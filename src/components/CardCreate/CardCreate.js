import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";

import CreateForm from "../CreateForm/CreateForm";

const CardCreate = ({ onCreate, columnId }) => {
  const createDesk = (name) => {
    const db = firebase.firestore();

    return db.collection('cards')
      .add({ name, columnId })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createDesk}
      placeholder="Введите название карточки"
      actionTitle="Создать карточку"
    />
  );
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default CardCreate;
