import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import { putShows } from "../../slices/showsSlice";
import { fetchShowEspisode, fetchShows } from "../requests/shows";
import type { ShowsModel } from "../../types/show.model";

export function* getShowHanlders(action: any): any {
  try {
    const res = yield call(fetchShows);
    const { data } = res;
    const showIds: number[] = data.map((show: ShowsModel) => show.show.id);
    const espisodes = showIds.map((id) =>
      fetchShowEspisode(id).then((res) => res.data)
    );
    const fetchedEsp = yield all(espisodes);
    const finalizedData = data.map((show: any, index: number) => ({
      ...show,
      espisodes: fetchedEsp[index],
    }));
    yield put(putShows(finalizedData));
  } catch (e) {
    console.log(e);
  }
}
