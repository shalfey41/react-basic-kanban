import * as actionType from "./types";
import {api, apiCreateDesk, apiGetColumns} from "../api";

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk } });
export const removeDesk = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId } });
export const setDesks = (desks) => ({ type: actionType.SET_DESKS, payload: { desks } });

export const setActivePanel = (panel) => ({ type: actionType.SET_ACTIVE_PANEL, payload: { panel } });
export const changeRoute = ({ route }) => setActivePanel(route.name);

export const addCard = (card) => ({ type: actionType.ADD_CARD, payload: { card } });
export const removeCard = (removeId) => ({ type: actionType.REMOVE_CARD, payload: { removeId } });
export const setCards = (cards) => ({ type: actionType.SET_CARDS, payload: { cards } });

export const setPopout = (popout) => ({ type: actionType.SET_POPOUT, payload: { popout } });

export const fetchDesks = () => (dispatch) => (
  api.getDesks()
    .then((desks) => {
      dispatch({ type: 'fetchDesksSuccess' });
      dispatch(setDesks(desks));
    })
    .catch(() => dispatch({ type: 'fetchDesksFail' }))
);

export const deleteDesk = (id) => (dispatch) => (
  api.deleteDesk(id)
    .then(() => {
      dispatch({ type: 'deleteDeskSuccess' });
      dispatch(removeDesk(id));
    })
    .catch(() => dispatch({ type: 'deleteDeskFail' }))
);

export const createDesk = (name) => (dispatch) => (
  api.createDesk(name)
    .then((doc) => {
      dispatch({ type: 'createDeskSuccess' });
      dispatch(addDesk({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: 'createDeskFail' }))
);

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getState().desks;
  const desk = desks.find(({ id }) => id === deskId) || {};

  if (desk.id) {
    return api.getColumns(desk.id)
      .then((columns) => {
        dispatch({ type: 'fetchColumnsSuccess' });
        dispatch(setColumns(columns));
      })
      .catch(() => dispatch({ type: 'fetchColumnsFail' }))
  }
};

export const deleteColumn = (id) => (dispatch) => (
  api.deleteColumn(id)
    .then(() => {
      dispatch({ type: 'deleteColumnSuccess' });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: 'deleteColumnFail' }))
);

export const fetchCards = (columnId) => (dispatch) => (
  api.getCards(columnId)
    .then((cards) => {
      dispatch({ type: 'fetchCardsSuccess' });
      dispatch(setCards(cards));
    })
    .catch(() => dispatch({ type: 'fetchCardsFail' }))
);

export const deleteCard = (id) => (dispatch) => (
  api.deleteCard(id)
    .then(() => {
      dispatch({ type: 'deleteCardSuccess' });
      dispatch(removeCard(id));
    })
    .catch(() => dispatch({ type: 'deleteCardFail' }))
);

export const createColumn = (name, id) => (dispatch) => (
  api.createColumn(name, id)
    .then((doc) => {
      dispatch({ type: 'createColumnSuccess' });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: 'createColumnFail' }))
);

export const createCard = (name, id) => (dispatch) => (
  api.createCard(name, id)
    .then((doc) => {
      dispatch({ type: 'createCardSuccess' });
      dispatch(addCard({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: 'createCardFail' }))
);
