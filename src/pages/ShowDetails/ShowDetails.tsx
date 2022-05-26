import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as IconBack } from '../../assets/images/back-icon.svg'
import { Card } from '../../components'
import { EpisodeModel } from '../../types/episode.model'

const Episode: FC = () => {
  const location = useLocation()
  const episode = location.state as EpisodeModel
  const navigate = useNavigate();
  return (
    <div>
      <Heading>
        <IconBack onClick={() => {
          navigate(-1)
        }}/>
        <h2>Episode Detail</h2>
      </Heading>
      <Card
        name={episode?.name}
        summary={episode?.summary || ''}
        image={episode.image}
      />
    </div>
  )
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`

export default Episode
