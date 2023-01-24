import styled from "styled-components/native";

export const Container = styled.SafeAreaView<{ width: number, height: number }>`
  width: ${props=>props.width};
  height: ${props=>props.height};
  background-color: white;
  position: relative;
  background-color: black;
`;

export const ReelsHeader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  padding: 102px;
`;

export const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;