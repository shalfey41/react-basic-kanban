import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardGrid } from "@vkontakte/vkui";
import firebase from "firebase";

import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) => setCards(cards.filter(({ id }) => id !== removeId));

  // Запрос в базу данных за карточками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection('cards').where('columnId', '==', columnId).get()
      .then((querySnapshot) => {
        const cards = [];

        querySnapshot.forEach((doc) => {
          const { columnId, name } = doc.data();

          cards.push({
            id: doc.id,
            columnId,
            name,
          });
        });

        setCards(cards);
      });
  }, []);

  return (
    <CardGrid>
      {cards.map(({ id, name }) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}

      <CardCreate columnId={columnId} onCreate={addCard} />
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
