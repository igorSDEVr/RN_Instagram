import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const View0 = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border-width: 1px;
  opacity: 0.7;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const View00 = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: black;
  opacity: 0.1px;
  margin: 5px;
`;

export const View1 = styled.View`
  width: 100%;
  padding: 10px;
`;

export const View2 = styled.View`

`;

export const Txt = styled.Text`
  padding: 10px;
  letter-spacing: 1px;
  font-size: 14px;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 10px;
`;