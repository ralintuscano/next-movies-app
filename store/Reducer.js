export const initialState = {
  user: null,
  playlists: [],
  playling: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

// import { SET_ALERT, REMOVE_ALERT } from '../types';

// export default (state, action) => {
//   switch (action.type) {
//     case SET_ALERT:
//       return [...state, action.payload];
//     case REMOVE_ALERT:
//       return state.filter(alert => alert.id !== action.payload);
//     default:
//       return state;
//   }
// };
