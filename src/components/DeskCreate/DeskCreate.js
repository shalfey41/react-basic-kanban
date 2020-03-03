import React, { useContext } from 'react';

import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions";
import Context from "../App/context";

const DeskCreate = () => {
  const { addDesk } = useContext(Context);
  const createItem = (name) => (
    createDesk(name)
      .then((doc) => addDesk({ id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default DeskCreate;
