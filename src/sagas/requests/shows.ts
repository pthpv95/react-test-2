import instance from "../../utils/api";

export const fetchShows = () => {
  return Promise.resolve(
    instance.get("https://api.tvmaze.com/search/shows?q=Powerpuff Girls")
  );
};

export const fetchShowEpisode = (showId: number) => {
  return Promise.resolve(
    instance.get(`https://api.tvmaze.com/shows/${showId}/episodes`)
  );
};

export const fetchEpisodeDetail = (espId: Number) => {
  return Promise.resolve(
    instance.get(`https://api.tvmaze.com/episodes/${espId}`)
  );
};
