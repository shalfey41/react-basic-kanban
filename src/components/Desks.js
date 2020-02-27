import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import DeskList from "./DeskList";
import DeskCreate from "./DeskCreate";

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId));

  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>

      <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} />
    </Fragment>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
