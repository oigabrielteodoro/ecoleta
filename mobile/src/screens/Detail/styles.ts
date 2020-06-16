import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px 32px;
`;

export const BackButton = styled.TouchableOpacity``;

export const PointImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`; 

export const PointName = styled.Text`
  color: #322153;
  font-size: 28px;
  margin-top: 24px;
  font-family: 'Ubuntu_700Bold';
`;

export const PointItems = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #6c6c80;
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  font-family: 'Roboto_500Medium';
  color: #322153;
  font-size: 16px;
`;

export const AddressContent = styled.Text`
  font-family: 'Roboto_400Regular';
  line-height: 24px;
  margin-top: 8px;
  color: #6c6c80;
`;

export const Footer = styled.View`
  border-color: #999;
  padding: 20px 32px 0px;
  
  flex-direction: row;
  justify-content: space-between;

  border-top-width: 0.5px;
  border-color: #999;
`;

export const Button = styled(RectButton)`
  width: 48%;
  background-color: #34cb79;
  border-radius: 10px;
  height: 50px;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  color: #fff;
  font-size: 16px;
`;