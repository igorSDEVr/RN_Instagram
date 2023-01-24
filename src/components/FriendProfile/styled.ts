import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 10px;
`;

export const View2 = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Touch1 = styled.TouchableOpacity``;

export const View3 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 92%;
`;

export const Txt1 = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
`;

export const Txt2 = styled.View`
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const StyledScrollView = styled.ScrollView`
  padding-top: 10px;
`;

export const View4 = styled.View`
  width: 160px;
  height: 200px;
  margin: 3px;
  justify-content: center;
  align-items: center;
  border-width: 0.5px;
  border-color: #DEDEDE;
  border-radius: 2px;
  position: relative;
`;

export const Touch2 = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Img2 = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 10px;
`;

export const View5 = styled.View<{ isFollow: boolean }>`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: ${props=>props.isFollow ? null : '#3493D9'};
  border-width: ${props=>props.isFollow ? 1 : 0};
  border-color: #DEDEDE;
  justify-content: center;
  align-items: center;
`;