import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: 'white';
  height: 100%;
`;

export const StyledStatusBar = styled.StatusBar.attrs({
  backgroundColor: "white",
  barStyle: "dark-content",
  animated: true
})``;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
`;
export const HeaderTxt = styled.Text`
  /* font-family: Lobster-Regular; */
  font-size: 25px;
  font-weight: 500;
`;

export const StyledScroll = styled.ScrollView``;

export const EndingOfPage = styled.View`
  justify-content: center;
  align-items: center;
  padding: 25px;
`;