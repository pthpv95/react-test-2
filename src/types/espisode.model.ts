export interface EspisodeModel {
  airdate: Date;
  airstamp: Date;
  airtime: string;
  id: number;
  image: { original?: string; medium?: string };
  name: string;
  number: number;
  rating: { average: null | number };
  runtime: number;
  season: number;
  summary: null | string;
  type: string;
  url: string;
}
