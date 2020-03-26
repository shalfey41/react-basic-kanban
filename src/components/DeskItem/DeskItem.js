import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from "react-router5";
import { useDispatch } from "react-redux";
import { Card, Div, Button } from "@vkontakte/vkui";

import './DeskItem.css';
import { pages } from "../../router";
import { deleteDesk } from "../../actions/actions";

const DeskItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const goToColumnPanel = () => router.navigate(pages.COLUMNS, { deskId: id });
  const deleteItem = (event) => {
    event.stopPropagation();

    dispatch(deleteDesk(id));
  };

  return (
    <Card size="l" onClick={goToColumnPanel}>
      <Div className="DeskItem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>Удалить</Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DeskItem;
