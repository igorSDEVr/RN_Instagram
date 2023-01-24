import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;

export const Touch1 = styled.TouchableOpacity`
  width: 100%;
`;

export const View1 = styled.View`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border-color: #DEDEDE;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const Txt1 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.8;
`;

export const View2 = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Touch2 = styled.TouchableOpacity`
  width: 42%;
`;

export const View3 = styled.View<{ follow: boolean }>`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: ${props=>props.follow ? null : '#3493D9'};
  border-width: ${props=>props.follow ? 1 : 0};
  border-color: #DEDEDE;
  justify-content: center;
  align-items: center;
`;

export const Txt2 = styled.View<{ follow: boolean }>`
  color: ${props=>props.follow ? 'black' : 'white' };
`;

export const View4 = styled.View`
  width: 42%;
  height: 35px;
  border-width: 1px;
  border-color: #DEDEDE;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Txt3 = styled.Text`

`;

export const View5 = styled.View`
  width: 10%;
  height: 35px;
  border-width: 1px;
  border-color: #DEDEDE;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;


// export const  = styled.View`

// `;