import React, { useContext } from 'react';
import { Div } from "@vkontakte/vkui";

import '../Column/Column.css'
import CreateForm from "../CreateForm/CreateForm";
import { createColumn } from "../../actions";
import Context from "../App/context";

const ColumnCreate = () => {
  const { addColumn, activeDesk } = useContext(Context);
  const createItem = (name) => (
    createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createItem}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

export default ColumnCreate;
