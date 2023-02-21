import { BOOK, REMOVE } from './actionTypes';

export const book = (value) => {
  return {
    type: BOOK,
    payload: value,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    id: id,
  };
};
