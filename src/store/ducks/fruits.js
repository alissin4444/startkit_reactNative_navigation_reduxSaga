import produce from "immer";

import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addFruitRequest: [],
  addFruitSuccess: [],
});

export const FruitsTypes = Types;

const INITIAL_STATE = [];

const addFruitSuccess = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    const actualIndexFruit = draft.length + 1
    draft.push(`Fruit ${actualIndexFruit}`)
  });

export default createReducer(INITIAL_STATE, {
  [Types.ADD_FRUIT_SUCCESS]: addFruitSuccess,
});