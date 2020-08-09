import React from 'react'
import { ImageBackground } from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {
  Container,
  ImageClassBackground,
  Title,
  Description,
  OkButton,
  OkButtonText
} from './styles'

import giveClassesBackground from '../../assets/images/give-classes-background.png'

export function GiveClasses(){
  const {goBack} = useNavigation()
  
  function handleGoBack(){
    goBack()
  }

  return(
    <Container>
       <ImageClassBackground 
         resizeMode="contain"
         source={giveClassesBackground}
        >
        <Title>Quer ser um proffy?</Title>
        <Description>Para começar, você precisa se cadastrar como professor na nossa plataforma web</Description>
      
        <OkButton onPress={handleGoBack}> 
          <OkButtonText>Tudo bem</OkButtonText>
        </OkButton>
       </ImageClassBackground>
    </Container>
  )
}