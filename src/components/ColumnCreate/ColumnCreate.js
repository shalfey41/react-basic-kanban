import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import { Div } from "@vkontakte/vkui";

import '../Column/Column.css'
import CreateForm from "../CreateForm/CreateForm";

const ColumnCreate = ({ onCreate, deskId }) => {
  const createColumn = (name) => {
    const db = firebase.firestore();

    return db.collection('columns')
      .add({ name, deskId })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createColumn}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
};

export default ColumnCreate;
