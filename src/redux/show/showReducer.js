import { BOOK, REMOVE } from './actionTypes';

const initialState = {
  location: '',
  destination: '',
  date: '',
  guests: '',
  cabin: '',
  book: false,
  remove: false,
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        book: true,
        location: action.payload.location,
        destination: action.payload.destination,
        date: action.payload.date,
        guests: action.payload.guests,
        cabin: action.payload.cabin,
      };
    case REMOVE:
      return {
        ...state,
        remove: true,
      };
    default:
      return state;
  }
};

export default showReducer;
