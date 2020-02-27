import React from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from "@vkontakte/vkui";

import './DeskItem.css';
import firebase from "firebase";

const DeskItem = ({ id, children, onDelete }) => {
  const deleteItem = () => {
    const db = firebase.firestore();

    db.collection('desks')
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="DeskItem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>Удалить</Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DeskItem;
