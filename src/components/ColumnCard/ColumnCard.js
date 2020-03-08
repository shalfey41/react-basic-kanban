import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from "@vkontakte/vkui";

import './ColumnCard.css';
import { deleteCard } from "../../actions";
import Context from "../App/context";

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };

  return (
    <Card size="l" mode="outline">
      <Div className="ColumnCard__wrapper">{children}</Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
