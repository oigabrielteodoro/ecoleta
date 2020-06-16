import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  max-width: 260px;
  margin-top: 64px;
  font-family: 'Ubuntu_700Bold';
`;

export const Description = styled.Text`
  color: #6C6C80;
  font-size: 16px;
  margin-top: 16px;
  max-width: 260px;
  line-height: 24px;
  font-family: 'Roboto_400Regular';
`;

export const Footer = styled.View``;

export const Select = styled.View``;

export const Input = styled.TextInput`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 24px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  background-color: #34cb79;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
  height: 60px;

  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;

  justify-content: center;
  text-align: center;

  color: #fff;
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`;
