import React, { useState, FormEvent } from 'react'
import {Link} from 'react-router-dom'

import {
  TeacherList,
  Content,
  SearchTeacher,
  Main,
  Filter
} from './styles'

import Header from '../../components/Header'
import TeacherItemComponent, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../server/api'


export default function Teachers(){
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')


  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject, week_day, time,
      },
    });

    setTeachers(response.data);
  }


  return (
    <TeacherList className="container">
      <Header title="Estes são os proffys disponíveis">
        <SearchTeacher onSubmit={searchTeachers}>
        <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
            type="time"
          />

            <Filter type="submit">
              Filter
            </Filter>

        </SearchTeacher>
      </Header>

      <Main>
      {teachers.map((teacher: Teacher) => {
          return <TeacherItemComponent key={teacher.id} teacher={teacher} />;
        })}
      </Main>
    </TeacherList>
  )
}