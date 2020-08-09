import React from "react";

import {
  TeacherItem,
  HeaderList,
  InformationTeacher,
  NameTeacher,
  Materia,
  Description,
  Footer,
  TitlePrice,
  Price,
  ButtonWhats,
} from "./styles";

import whatsapp from "../../assets/images/icons/whatsapp.svg";
import api from '../../server/api'


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
}

const TeacherItemComponent: React.FC<TeacherItemProps> = ({ teacher }) =>  {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <TeacherItem>
      <HeaderList>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />

        <InformationTeacher>
          <NameTeacher>{teacher.name}</NameTeacher>
         <Materia>{teacher.subject}</Materia>
        </InformationTeacher>
      </HeaderList>

      <Description>
        {teacher.bio}
      </Description>

      <Footer>
        <TitlePrice>Preço/hora</TitlePrice>
        <Price>R$30,00</Price>

        <ButtonWhats
         onClick = {createNewConnection}
         target="_blank"
         href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsapp} alt="Whatsapp Icon" />
          Entrar em contato
        </ButtonWhats>
      </Footer>
    </TeacherItem>
  );
}

export default TeacherItemComponent
