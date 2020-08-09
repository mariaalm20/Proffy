import styled from 'styled-components'

import {ScrollView} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`

export const TeacherListScroll = styled(ScrollView)`
  margin-top: -32px;
`


export const SearchForm = styled.View`
  margin-bottom: 8px;
  margin-top: 48px;
`
  export const Label = styled.Text`
    color: #d4c2ff;
    font-family: Poppins_400Regular;
  `
  export const Input = styled.TextInput`
    height: 54px;
    background-color: #ffff;
    border-radius: 8px;
    justify-content: center;
    padding: 16px;
    margin-top: 4px;
    margin-bottom:16px;
  `
  export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
  `
  export const InputBlock = styled.View`
    width: 48%;
  `

export const SubmitButton = styled(RectButton)`
  background-color: #04f361;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
export const SubmitButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 16px;
`