import { BOOKING, DELETE } from "./actionTypes";

export const bookingAction = (value) => {
  return {
    type: BOOKING,
    payload: value,
  };
};

export const deleteAction = (value) => {
  return {
    type: DELETE,
    payload: value,
  };
};
