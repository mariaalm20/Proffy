import React , {useState, useEffect} from 'react'

import {View,Image} from 'react-native'

import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import classesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import {useNavigation} from '@react-navigation/native'

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonContainer,
  Button,
  ButtonText,
  TotalConnections
} from './styles'

import api from '../../services/api'

export default function Landing(){
  const navigation = useNavigation()

  const [totalConnections, setTotalConncetions] = useState(0)

  useEffect(() => {
     api.get('/connections').then(response => {
       const total = response.data.total
       setTotalConncetions(total)
     })
  }, [])


  function handleNavigateToClasses(){
    navigation.navigate("GiveClasses")
  }

  function handleNavigateStudy(){
    navigation.navigate("Study")
  }
   
  return(
    <Container>
      <Banner source={landingImage}/>

      <Title>
        Seja bem-vindo, {`\n`}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonContainer>
        <Button onPress = {handleNavigateStudy}>
          <Image source = {studyIcon}/>
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress = {handleNavigateToClasses}>
          <Image source = {classesIcon}/>
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas {''}
        <Image source={heartIcon}/>
      </TotalConnections>
    </Container>
  )
}