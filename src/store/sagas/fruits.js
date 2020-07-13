import {  put } from "redux-saga/effects";

import { Creators as FruitsActions } from "../ducks/fruits";

export function* addFruitRequest() {
  yield put(FruitsActions.addFruitSuccess());
}