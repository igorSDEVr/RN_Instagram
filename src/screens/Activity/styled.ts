import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const ActivityHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  border-bottom-width: 0.5px;
  border-bottom-color: #DEDEDE;
  padding: 10px;
`;

export const StyledScrollView = styled.View.attrs({
  showsVerticalScrollIndicator: false
})`
  margin: 10px;
`;

export const Txt = styled.Text`
  font-weight: bold;
`;

export const HeaderBox = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const View1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  width: 100%;
`;

export const Touch1 = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 64%;
`;

export const Img1 = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const View2 = styled.View<{ follow: boolean }>`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: ${props=>props.follow ? null : '#3493D9'};
  border-width: ${props=>props.follow ? 1 : 0};
  border-color: ${props=>props.follow ? '#DEDEDE' : null};
  justify-content: center;
  align-items: center;
`;

export const Touch2 = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  max-width: 64%;
`;

export const Img2 = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    margin-right: 10px;
`;