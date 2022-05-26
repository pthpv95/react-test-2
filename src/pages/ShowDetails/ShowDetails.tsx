import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components";
import { EspisodeModel } from "../../types/espisode.model";
const Espisode: FC = () => {
  const location = useLocation();
  const espisode = location.state as EspisodeModel;

  return (
    <div>
      <h1>Espisode Detail</h1>
      <Card
        name={espisode?.name}
        summary={espisode?.summary || ""}
        image={espisode.image}
      />
    </div>
  );
};
export default Espisode;
