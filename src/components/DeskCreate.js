import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormLayout, Input } from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import firebase from "firebase/app";

const modes = {
  button: 'button',
  form: 'form',
};

const statuses = {
  default: 'default',
  error: 'error',
};

const DeskCreate = ({ onCreate }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.default);
  const reset = () => {
    setMode(modes.button);
    setStatus(statuses.default);
    setName('');
  };
  const createDesk = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    const db = firebase.firestore();

    db.collection('desks')
      .add({ name })
      .then((docRef) => docRef.get())
      .then((doc) => onCreate({ id: doc.id, ...doc.data() }))
      .then(reset)
      .catch(console.error);
  };

  if (mode === modes.button) {
    return (
      <Button
        onClick={() => setMode(modes.form)}
        before={<Icon24Add />}
        size="xl"
      >
        Создать доску
      </Button>
    );
  }

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={createDesk}>
        <Input
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          status={status}
          placeholder="Введите название доски"
        />

        <div>
          <Button onClick={createDesk}>Создать доску</Button>
          <Button onClick={reset} mode="tertiary">Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
