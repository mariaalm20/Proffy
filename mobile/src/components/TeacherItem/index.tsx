import React, {useState} from "react";

import {Image, Linking} from 'react-native'

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  Value,
  ButtonContainer,
  Favorite,
  Contact,
  ContactText,
} from "./styles";

import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavorite from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


import AsyncStorage from '@react-native-community/async-storage'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
  isFavorite: boolean;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher, isFavorite}) => {
  const [favorite, setFavorite] = useState(isFavorite)

  function handleLinkToWhatsapp(){
    Linking.openURL(`whatsapp//send?phone:${teacher.whatsapp}`)
  }

  async function handleToggleFavorited(){
    const favorites = await  AsyncStorage.getItem('favorites')

    let favoritesArray = []

      if(favorites) {
        favoritesArray = JSON.parse(favorites)
      }


    if(favorite){
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

      favoritesArray.splice(favoriteIndex, 1)
      setFavorite(false)
    } else{
      
      favoritesArray.push(teacher)
      
      setFavorite(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

  }

  return (
    <Container>
      <Profile>
        <Avatar source={{uri: teacher.avatar}} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        {teacher.bio}
      </Bio>

    <Footer>
      <Price>
         Preço/hora {'   '}
        <Value>R$ {teacher.cost}</Value>
      </Price>

      <ButtonContainer>
        <Favorite onPress ={handleToggleFavorited}>
          {isFavorite ? <Image source = {unfavorite}/> : <Image source = {heartIcon}/> }
        </Favorite>

        <Contact onPress = {handleLinkToWhatsapp}>
          <Image source = {whatsappIcon} />
          <ContactText>Entrar em contato</ContactText>
        </Contact>
      </ButtonContainer>
    </Footer>
    </Container>
  );
}

export default TeacherItem
