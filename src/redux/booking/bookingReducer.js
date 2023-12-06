const { BOOKING, DELETE } = require("./actionTypes");

const initialState = {
  value: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case DELETE:
      const bookingID = action.payload;
      return {
        ...state,
        value: state.value.filter((booking, index) => index !== bookingID),
      };

    default:
      return state;
  }
};
