import React from 'react';
import { useDispatch } from "react-redux";

import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions/actions";

const DeskCreate = () => {
  const dispatch = useDispatch();
  const createItem = (name) => dispatch(createDesk(name));

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default DeskCreate;
