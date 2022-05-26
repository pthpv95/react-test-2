import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import { putShows } from "../../slices/showsSlice";
import { fetchShowEpisode, fetchShows } from "../requests/shows";
import type { ShowsModel } from "../../types/show.model";

export function* getShowHanlders(action: any): any {
  try {
    const res = yield call(fetchShows);
    const { data } = res;
    const showIds: number[] = data.map((show: ShowsModel) => show.show.id);
    const episodes = showIds.map((id) =>
      fetchShowEpisode(id).then((res) => res.data)
    );
    const fetchedEsp = yield all(episodes);
    const finalizedData = data.map((show: any, index: number) => ({
      ...show,
      episodes: fetchedEsp[index],
    }));
    yield put(putShows(finalizedData));
  } catch (e) {
    console.log(e);
  }
}
