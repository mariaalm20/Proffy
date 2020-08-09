import React, {useState, FormEvent} from "react";

import Header from "../../components/Header";
import {useHistory} from 'react-router-dom'

import {
  TeacherForm,
  Main,
  Fieldset,
  Title,
  Footer, 
  Warning,
  ButtonSubmit,
  ScheduleItem,
} from "./styles";

import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SelectComponent from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";
import api from '../../server/api'


export default function TeachersForm() {
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [bio, setBio] = useState("")

  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState("")
  
  const history = useHistory()

  const [scheduleItems, setScheduleItems] = useState([
   { week_day: 0, from: '', to: ''}
  ])

  function addNewSchedule(){
    setScheduleItems([
      ...scheduleItems, 
      { week_day: 0, from: '8:00', to: '12:00' }
    ])
  }

  function setScheduleItemValue(index: number, field: string, value: string){
    const newArray = scheduleItems.map((scheduleItem, position) => {
      if(index === position) {
        return {...scheduleItem, [field]: value}
      }

      return scheduleItem
    }) 

    setScheduleItems(newArray)
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault()

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro relalizado com sucesso')

      history.push('/')
    }).catch(err => {
      alert('Erro ao cadastrar')
    })
  }

  return (
    <TeacherForm className="container">
      <Header
        title="Que incrivel que vocêe quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      ></Header>

      <Main>
       <form onSubmit={handleCreateClass}>
        <Fieldset>
          <Title>Seus dados</Title>

          <Input 
           name="name" 
           label="Nome completo"
           value={name} 
           onChange={e => setName(e.target.value)}
           />

          <Input 
            name="avatar" 
            label="Avatar" 
            value={avatar} 
            onChange={e => setAvatar(e.target.value)}
           />

          <Input 
            name="whatsapp" 
            label="Whatsapp"
            value={whatsapp} 
            onChange={e => setWhatsapp(e.target.value)}
             />

          <TextArea 
           name="bio" 
           label="Biografia" 
           value={bio} 
          onChange={e => setBio(e.target.value)}/>
        </Fieldset>

        <Fieldset>
          <Title>Sobre a aula</Title>

          <SelectComponent
            name="subject"
            label="Matéria"
            value={subject} 
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Input
            name="cost" 
            label="Custo hora/aula"
            value={cost} 
            onChange={e => setCost(e.target.value)}
            /> 
        </Fieldset>

        <Fieldset>
          <Title>
            Horários disponíveis
            <button type="button" onClick={addNewSchedule}>+ Novo horário</button>
          </Title>

         {scheduleItems.map((scheduleItem, index) => {
            return (
              <ScheduleItem key={scheduleItem.week_day}>
              <SelectComponent
                name="week_day"
                label="Dia da semana"
                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                value={scheduleItem.week_day}
                options={[
                  { value: "0", label: "Domingo" },
                  { value: "1", label: "Segunda-feira" },
                  { value: "2", label: "Terça-feira" },
                  { value: "3", label: "Quarta-feira" },
                  { value: "4", label: "Quinta-feira" },
                  { value: "5", label: "Sexta-feira" },
                  { value: "6", label: "Sábado" },
                ]}
              />
              <Input 
                name="from" 
                label="Das" 
                type="time"
                value={scheduleItem.from}
                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                />
              <Input 
               name="to" 
               label="Até" 
               type="time" 
               value={scheduleItem.to}
               onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
               />
              </ScheduleItem>
            )
           })}
        </Fieldset>

        <Footer>
          <Warning>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </Warning>

          <ButtonSubmit type="submit">Salvar cadastro</ButtonSubmit>
        </Footer>
        </form>
      </Main>
    </TeacherForm>
  );
}
