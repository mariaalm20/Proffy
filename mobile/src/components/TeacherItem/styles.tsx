import styled from "styled-components";

import { RectButton } from "react-native-gesture-handler";

import { TeacherItemProps } from "./index";


export const Container = styled.View`
  background-color: #fff;
  border-width: 1;
  border-color: #e6e6fa;
  border-radius: 10px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #ffff;
`;
export const ProfileInfo = styled.View`
  margin-left: 16px;
`;
export const Name = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 20px;
`;
export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  margin-top: 8px;
`;

export const Bio = styled.Text`
  margin: 12px 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 16px;
`;
export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
`;
export const Value = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257e5;
  font-size: 16px;
  margin-left: 16px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
export const Favorite = styled(RectButton)<TeacherItemProps>`
  background-color: ${(props) => props.isFavorite? '#e33d3d' : '#8257e5'};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const Contact = styled(RectButton)`
  background-color: #04f361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const ContactText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
