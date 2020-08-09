import React, {ReactNode} from "react";

import { Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Container, TopBar, Title, Top } from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logo from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  headerRight?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, children , headerRight}) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Landing");
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logo} resizeMode="contain" />
      </TopBar>
     
     <Top>
     <Title>{title}</Title>
      {headerRight }
     </Top>
    
      {children}
    </Container>
  ); 
};

export default Header;
