import { SET_FLATS } from "../actions";

export default function (state, action) {
  //compute and return new state
  if (state === undefined){
    return []
  }

  if (action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }
}
