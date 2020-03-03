import React, { useEffect, useContext } from 'react';
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../actions";
import Context from "../App/context";

const DeskList = () => {
  const { setDesks, desks } = useContext(Context);

  // Запрос в базу данных за досками
  useEffect(() => {
    getDesks().then(setDesks)
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => <DeskItem key={id} id={id}>{name}</DeskItem>)}
    </CardGrid>
  );
};

export default DeskList;
