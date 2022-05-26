import { EspisodeModel } from "../../types/espisode.model";

export interface CardProps {
  name: string;
  summary?: string;
  image: {
    original?: string;
    medium?: string;
  };
  espisode?: EspisodeModel[];
}
