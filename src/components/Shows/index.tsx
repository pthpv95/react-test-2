import React, { FC } from "react";
import styled from "styled-components";
import { ShowInfoModel } from "../../types/show.model";
import Card from "../Card/Card";

interface ShowsProps {
  data: ShowInfoModel[];
}

const Shows: FC<ShowsProps> = ({ data }) => {
  if (!data) return <div>No shows...</div>;

  return (
    <ShowsWrapper>
      <h1>Shows Page</h1>
      <ShowsWrapper>
        {data.map((item, idx) => (
          <Card
            key={item.show.id}
            name={item.show.name}
            summary={item.show.summary}
            image={item.show.image}
            espisode={item.espisodes}
          />
        ))}
      </ShowsWrapper>
    </ShowsWrapper>
  );
};

export default Shows;

const ShowsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  row-gap: 30px;
`;
