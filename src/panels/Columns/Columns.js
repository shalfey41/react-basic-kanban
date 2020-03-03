import React, { Fragment, useEffect, useContext } from 'react';
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";

import './Columns.css';
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(activeDesk.id).then(setColumns);
  }, []);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Доска «{activeDesk.name}»</PanelHeaderSimple>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({ id, name }) => <Column key={id} name={name} id={id} />)}

        <ColumnCreate />
      </Gallery>
    </Fragment>
  );
};

export default Columns;
