import styled from 'styled-components/native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';

interface ItemSelected {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 64px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 24px;
  font-family: 'Ubuntu_700Bold';
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Roboto_400Regular';
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34cb79;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 13px;
  line-height: 23px;
  font-family: 'Roboto_400Regular';
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const Items = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  }
}))``;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  border: 2px solid ${({ selected }: ItemSelected) => selected ? '#34CB79' : '#eee'};
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 20px 16px 16px;
  margin-right: 8px;

  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
`;