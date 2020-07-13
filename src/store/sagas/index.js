import { all, takeLatest } from "redux-saga/effects";

import { FruitsTypes } from "../ducks/fruits";

import { addFruitRequest } from "./fruits";

export default function* rootSaga() {
  return yield all([
    takeLatest(
      FruitsTypes.ADD_FRUIT_REQUEST,
      addFruitRequest
    ),
  ]);
}