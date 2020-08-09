import React from 'react'
import styled from 'styled-components'

import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
  background-color: #8257E5;
  flex: 1 ;
  justify-content: center;
  padding: 40px;
`

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`

export const Title = styled.Text`
 font-family: Poppins_400Regular;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`
export const TitleBold = styled.Text`
 font-family: Poppins_600SemiBold;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`
export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #04D361;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`
export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #D4C2FF;
  font-size: 12px;
  line-height: 20px;
  max-width: 150px;
  margin-top: 40px;
`