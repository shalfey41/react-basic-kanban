import React, { Fragment, useEffect, useContext } from 'react';
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from 'react-router5';

import './Columns.css';
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

const Columns = () => {
  const { goToDesks, setColumns, columns, desks } = useContext(Context);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then(setColumns);
    }
  }, [desk]);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name ? `«${desk.name}»` : ''}</PanelHeaderSimple>

      <Gallery
        className="Columns__list"
        slideWidth="85%"
        align="left"
      >
        {columns.map(({ id, name }) => <Column key={id} name={name} id={id} />)}

        <ColumnCreate />
      </Gallery>
    </Fragment>
  );
};

export default Columns;
