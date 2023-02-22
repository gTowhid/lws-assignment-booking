import { BOOK, REMOVE } from './actionTypes';

const initialState = [
  {
    id: 0,
    location: '',
    destination: '',
    date: '',
    guests: '',
    cabin: '',
  },
];

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      let newState = [...state];
      if (action.id === 0) {
        newState[0] = {
          ...newState[0],
          location: action.payload.location,
          destination: action.payload.destination,
          date: action.payload.date,
          guests: action.payload.guests,
          cabin: action.payload.cabin,
        };
      } else {
        newState = [
          ...state,
          {
            id: action.id,
            location: action.payload.location,
            destination: action.payload.destination,
            date: action.payload.date,
            guests: action.payload.guests,
            cabin: action.payload.cabin,
          },
        ];
      }
      return newState;

    case REMOVE:
      const id = action.id;
      const removedState = [...state];
      var removalIndex;

      removedState.forEach((el, index) => {
        if (el.id === id) {
          removalIndex = index;
        }
      });

      removedState.splice(removalIndex, 1);

      return removedState;
    default:
      return state;
  }
};

export default showReducer;
