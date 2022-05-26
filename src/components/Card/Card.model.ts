import { EpisodeModel } from "../../types/episode.model";

export interface CardProps {
  name: string;
  summary?: string;
  image: {
    original?: string;
    medium?: string;
  };
  episode?: EpisodeModel[];
}
