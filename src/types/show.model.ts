import { EspisodeModel } from "./espisode.model";

export interface ShowsModel {
  score: number;
  show: {
    averageRuntime: string | null;
    dvdCountry: string | null;
    ended: string | null;
    externals: { tvrage: string | null; thetvdb: string | null; imdb: string };
    genres: undefined | any[];
    id: number;
    image: {
      medium: string;
      original: string;
    };
    language: string;
    name: string;
    network: any;
    officialSite: string | null;
    premiered: string | null;
    rating: { average: string | null };
    runtime: string | null;
    status: string;
    summary: string;
    type: string;
    updated: Date;
    url: string;
    weight: number;
  };
}

export interface ShowInfoModel extends ShowsModel {
  espisodes: EspisodeModel[];
}
