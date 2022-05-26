import { all, call, put } from "redux-saga/effects";
import { putShows } from "../../slices/showsSlice";
import type { ShowsModel } from "../../types/show.model";
import { fetchShowEpisode, fetchShows } from "../requests/shows";

export function* getShowHanlders(action: any): any {
  try {
    const res = yield call(fetchShows);
    const { data } = res;
    const runningShows = data.filter((item: any) => item.show.status === 'Running');
    
    const showIds: number[] = runningShows.map((show: ShowsModel) => show.show.id);
    const episodes = showIds.map((id) =>
      fetchShowEpisode(id).then((res) => res.data)
    );
    const fetchedEsp = yield all(episodes);
    const finalizedData = runningShows.map((show: any, index: number) => ({
      ...show,
      episodes: fetchedEsp[index],
    }));
    yield put(putShows(finalizedData));
  } catch (e) {
    console.log(e);
  }
}
