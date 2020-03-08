import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions";
import Context from "../App/context";

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);
  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) => addCard({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
