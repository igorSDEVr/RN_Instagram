import styled from "styled-components/native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`

`;

export const SearchPlus = styled.View`
  margin: 25px;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(AntDesign)`
  font-size: 40px;
  opacity: 0.5px;
`;

export const ModalImage = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const StyledStatusBar = styled.StatusBar``;

export const ModalImageView = styled.View<{ top: number, left: number }>`
  position: absolute;
  top: ${props=>props.top / 6};
  left: ${props=>props.left / 18};
  background-color: white;
  width: 90%;
  height: 465;
  border-radius: 15;
  z-index: 1;
  elevation: 50;
`;

export const ModalTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

export const ModalTitleImg = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

export const ModalTitleBox = styled.View`
  padding-left: 8px;
`;

export const ModalTitleTxt = styled.Text`
  font-size: 12px;
  font-weight: 600;
`;

export const ModalImg = styled.Image`
  width: 100%;
  height: 80%;
`;

export const ModalFooter = styled.View`
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;