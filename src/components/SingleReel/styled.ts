import styled from "styled-components/native";
import Ionic from 'react-native-vector-icons/Ionicons';


export const Container = styled.View<{ width: number, height: number }>`
  width: ${props=>props.width};
  height: ${props=>props.height};
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Touch1 = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;
`;

// export const Video = styled(Video)`
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

export const Volume = styled(Ionic)<{ mute: boolean }>`
  font-size: ${props=>props.mute ? 20 : 0};
  color: white;
  position: absolute;
  background-color: rgba(52,52,52,0.6);
  border-radius: 100px;
  padding: ${props=>props.mute ? '20px' : 0};
`;

export const View2 = styled.View<{ width: number }>`
  position: absolute;
  width: ${props=>props.width};
  z-index: 1;
  bottom: 0;
  padding: 10px;
`;

export const View3 = styled.View``;

export const Touch2 = styled.TouchableOpacity`
  width: 150px;
`;

export const View4 = styled.View`
  width: 100px;
  flex-direction: row;
  align-items: center;
`;

export const View5 = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-color: white;
  margin: 10px;
`;

export const Img1 = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Txt1 = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Txt2 = styled.Text`
  color: white;
  font-size: 14px;
  margin: 10px;
`;

export const View6 = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const NoteMusical = styled(Ionic)`
  color: #fff;
  font-size: 16px;
`;

export const Txt3 = styled.Text`
  color: #fff;
`;

export const View7 = styled.View`
  position: absolute;
  bottom: 10px;
  right: 0;
`;

export const Touch3 = styled.TouchableOpacity`
  padding: 10px;
`;

export const Txt4 = styled.Text`
  color: #fff;
`;

export const View8 = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
  margin: 10px;
`;

export const Img2 = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* resizeMode: cover; */
`;