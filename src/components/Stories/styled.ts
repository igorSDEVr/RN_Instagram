import styled from "styled-components/native";
import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding-left: 20px;
  padding-right: 20px;
`;

export const StoriesWrap = styled.View`
  flex-direction: column;
  padding: 8px;
  position: relative;
`;

export const Plus = styled.View`
  position: absolute;
  bottom: 15;
  right: 10;
  z-index: 1;
`;

export const PlusIcon = styled(Entypo).attrs({
  name: "circle-with-plus"
})`
  font-size: 20px;
  color: #405de6;
  background-color: 'white';
  border-radius: 100;
`;

export const StorieCircle = styled.View`
  width: 68px;
  height: 68px;
  background-color: 'red';
  border-width: 1.8px;
  border-radius: 100px;
  border-color: #c13584;
  justify-content: center;
  align-items: center;
`;

export const StorieImg = styled.Image`
  /* resize-mode: cover; */
  width: 92%;
  height: 92%;
  border-radius: 100px;
  background-color: orange;
`;

export const StorieTitle = styled.Text<{ ide?: number }>`
  text-align: center;
  font-size: 10px;
  opacity: ${props=>props.ide == 0 ? 1 : 0.5};
`;