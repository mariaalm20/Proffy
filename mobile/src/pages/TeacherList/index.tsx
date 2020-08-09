import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";
import {Feather} from '@expo/vector-icons'


import {
  Container,
  TeacherListScroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from "./styles";


import Header from "../../components/Header";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import { BorderlessButton } from "react-native-gesture-handler";

import api from '../../services/api'

export default function TeacherList() {
  const [filtersVisible, setFilterVisible] = useState(false)
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')


  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritesTeachers =  JSON.parse(response)

        const favoritesTeachersIds = favoritesTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritesTeachersIds)
      }
    })
  }

  function handleToggleFilterVisible(){
    setFilterVisible(!filtersVisible)
  }

  async function searchTeachers() {
    loadFavorites()

    const response = await api.get('/classes', {
      params: {
        subject, week_day, time,
      },
    });

    console.log(response.data)
    
    setFilterVisible(false)
    setTeachers(response.data);
  }

  return (
    <Container>
      <Header 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}>
       { filtersVisible && ( <SearchForm>
          <Label>Matéria</Label>
          <Input 
          placeholderTextColor="#c1bccc"
          placeholder="Qual é a matéria?"
          value={subject}
          onChangeText={(text: string) => setSubject(text)}
          />

          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input 
              placeholderTextColor="#c1bccc"
              placeholder="Que dia?"
              value={week_day}
              onChangeText={(text: string) => setWeekDay(text)}
               />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <Input 
              placeholderTextColor="#c1bccc"
              placeholder="Que horário?"
              value={time}
              onChangeText={(text: string) => setTime(text)}
               />
            </InputBlock>
          </InputGroup>
           
           <SubmitButton onPress={searchTeachers}>
             <SubmitButtonText>Filtrar</SubmitButtonText>
           </SubmitButton>

        </SearchForm> 
        )}
      </Header>

      <TeacherListScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return(
         <TeacherItem  
            key = {teacher.id} 
            teacher={teacher}
            isFavorite = {favorites.includes(teacher.id)}
         />
          )
        })}
        
      </TeacherListScroll>
    </Container>
  );
}
