import React from "react";

import {
  Container,
  TopBarContainer,
  Back,
  Logo,
  HeaderContent,
  Title,
  Description
} from "./styles";

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface Title {
  title: string,
  description?: string
}

const Header: React.FC<Title> = (props) => {
  return (
    <Container>
      <TopBarContainer>
        <Back to="/">
          <img src={backIcon} alt="Voltar" />
        </Back>

        <Logo src={logo} alt="Logo" />
      </TopBarContainer>

      <HeaderContent>
        <Title>{props.title}</Title>
        {props.description && <Description>{props.description}</Description>}
        {props.children}
      </HeaderContent>
    </Container>
  );
}

export default Header
