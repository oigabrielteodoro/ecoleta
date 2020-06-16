import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Main, 
  Img,
  Title, 
  Description, 
  Footer,
  Button,
  ButtonIcon,
  ButtonText,
  Input,
} from './styles';

export default function Home() {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    if (uf === '' || city === '') {
      Alert.alert('Oooops...', 'Você precisa preencher os campos!');
      return;
    }

    console.log(uf, city);

    navigation.navigate('Points', {
      uf, 
      city,
    });
  }

  return ( 
    <KeyboardAvoidingView style={{ flex: 1 }}behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container 
        source={require('../../assets/images/home-background.png')}
        imageStyle={{
          width: 274,
          height: 368
        }}
      >
        <Main>
          <Img source={require('../../assets/images/logo.png')} />
          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Description>
          </View>
        </Main>
        
        <Footer>
        <Input 
            placeholder="Digite a UF"
            value={uf} 
            onChangeText={setUf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <Input 
            placeholder="Digite a cidade"
            value={city} 
            onChangeText={setCity}
            autoCorrect={false}
          />

          <Button onPress={handleNavigateToPoints}>
            <ButtonIcon>
              <Feather name="arrow-right" color="#fff" size={24} />
            </ButtonIcon>
            <ButtonText>
              Entrar
            </ButtonText>
          </Button>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  )
};