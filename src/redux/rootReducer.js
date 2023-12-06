"use client";

import { bookingReducer } from "./booking/bookingReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  bookingReducer,
});

export default rootReducer;
