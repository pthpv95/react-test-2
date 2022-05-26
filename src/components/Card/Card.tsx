import React, { FC, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { EpisodeModel } from '../../types/episode.model'
import type { CardProps } from './Card.model'

const Card: FC<CardProps> = ({ name, summary, image, episode: episode }) => {
  const navigate = useNavigate()
  const sanitizeSummary = useMemo(() => {
    let res
    res = summary?.replace(/(<([^>]+)>)/gi, '')
    return res
  }, [summary])

  const handleNavigate = (esp: EpisodeModel) => {
    navigate(`/shows/${esp.id}/episode`, { state: esp })
  }

  return (
    <CardWrapper bg={image?.medium ?? 'none'}>
      <ImageWrapper>
        {image && <img src={image.original} alt={name} />}
      </ImageWrapper>
      <InfoWrapper>
        <ShowName>{name}</ShowName>
        <q>
          <em>{sanitizeSummary || 'No content'}</em>
        </q>
        {episode?.length && <h3>Episode</h3>}
        <EpisodeWrapper>
          {episode?.map((esp) => (
            <li key={esp.id} onClick={() => handleNavigate(esp)}>
              {esp.name}
            </li>
          ))}
        </EpisodeWrapper>
      </InfoWrapper>
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.div<{ bg: string }>`
  background: ${(props) =>
    props.bg === 'none' ? 'rgba(0,0,0,0.5)' : `url(${props.bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 1024px) {
    flex-flow: row nowrap;
  }
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
    min-width: 400px;
    min-height: 400px;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const InfoWrapper = styled.div`
  padding: 1rem 1rem 1rem 3rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`

const ShowName = styled.h1``

const EpisodeWrapper = styled.ul`
  max-height: 300px;
  overflow-y: auto;

  & li {
    padding: 0.2rem;
    color: white;
    cursor: pointer;
    @media (min-width: 1024px) {
      padding: 0.5rem;
    }
    &:hover {
      font-weight: bold;
    }
  }
`
