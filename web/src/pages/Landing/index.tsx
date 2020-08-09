import React, { useState, useEffect } from 'react'

import {
  LandingContainer,
  Content,
  ContainerLogo,
  Logo,
  Description,
  ImageHero,
  ButtonsContainer,
  Total,
  PurpleHeart,
  ButtonStudy,
  ButtonGiveClasses
} from './styles'

import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../server/api'


export default function Landing(){
  const [totalConnections, setTotalConncetions] = useState(0)

  useEffect(() => {
     api.get('/connections').then(response => {
       const total = response.data.total
       setTotalConncetions(total)
     })
  }, [])


  return(
    <LandingContainer>
      <Content>
        <ContainerLogo>
          <Logo src = {logo} alt="Logo" />
          <Description>Sua plataforma de estudos online</Description>
        </ContainerLogo>

        <ImageHero src = {landing} alt="Plataforma de estudos" />

        <ButtonsContainer>
           <ButtonStudy to = "/study">
             <img src = {studyIcon} alt = "Estude"/>
             Estudar
           </ButtonStudy>

           <ButtonGiveClasses to= "/give-classes">
             <img src = {giveClassesIcon} alt = "Estudar" />
             Dar aula
           </ButtonGiveClasses>
           </ButtonsContainer>
           
           <Total>
             Total de {totalConnections} conexões já realizadas <PurpleHeart src = {purpleIcon} alt = "Coração roxo"/>
           </Total>
      </Content>
    </LandingContainer>
  )
}

