import { BOOK, REMOVE } from './actionTypes';

export const book = (value, id) => {
  return {
    type: BOOK,
    payload: value,
    id: id,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    id: id,
  };
};
