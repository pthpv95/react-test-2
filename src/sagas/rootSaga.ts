import { takeLatest, takeEvery } from "redux-saga/effects";
import { getShows } from "../slices/showsSlice";
import { getShowHanlders } from "./handlers/showsHandler";

export function* watcherSagas() {
  yield takeLatest(getShows.type, getShowHanlders);
}
