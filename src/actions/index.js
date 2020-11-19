import flats from "../flats";

export const SET_FLATS = 'SET_FLATS';

export function setFlats() {
  return {
    type: SET_FLATS,
    payload: flats
  };
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat
  };
}
