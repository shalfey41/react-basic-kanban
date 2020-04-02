import * as actionType from "./types";
import { api } from "../../api";
import { getDesks } from "../desks/selectors";

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getDesks(getState());
  const desk = desks.find(({ id }) => id === deskId) || {};

  if (desk.id) {
    return api.getColumns(desk.id)
      .then((columns) => {
        dispatch({ type: actionType.FETCH_COLUMNS_SUCCESS });
        dispatch(setColumns(columns));
      })
      .catch(() => dispatch({ type: actionType.FETCH_COLUMNS_FAIL }))
  }
};

export const deleteColumn = (id) => (dispatch) => (
  api.deleteColumn(id)
    .then(() => {
      dispatch({ type: actionType.DELETE_COLUMN_SUCCESS });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: actionType.DELETE_COLUMN_FAIL }))
);

export const createColumn = (name, id) => (dispatch) => (
  api.createColumn(name, id)
    .then((doc) => {
      dispatch({ type: actionType.CREATE_COLUMN_SUCCESS });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: actionType.CREATE_COLUMN_FAIL }))
);
