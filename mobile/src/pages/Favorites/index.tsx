import React, {useState, useEffect} from 'react'

import {
  Container,
  TeacherListScroll
} from './styles'

import Header from '../../components/Header'
import TeacherItem, {Teacher} from '../../components/TeacherItem'

import AsyncStorage from '@react-native-community/async-storage'

export default function Favorites(){
  const [favorites, setFavorites] = useState([])


  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritesTeachers =  JSON.parse(response)

        setFavorites(favoritesTeachers)
      }
    })
  }


  useEffect(() => {
    loadFavorites()
  }, [])

  return(
    <Container>
      <Header title = "Meus proffys favoritos"/>

      <TeacherListScroll
         contentContainerStyle={{
           paddingHorizontal: 16,
           paddingBottom: 16
         }}
      >
        {favorites.map((teacher: Teacher) => {
          return(
            <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            isFavorite
            />
          )
        })}
      </TeacherListScroll>
    </Container>
  )
}