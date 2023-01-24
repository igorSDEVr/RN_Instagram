import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export const Container = styled.View``;

export const PostV = styled.View`
  padding-bottom: 10px;
  border-bottom-color: 'red';
  border-bottom-width: 0.1px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const PostHeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostHeaderImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const PostHeaderUser  = styled.View`
  padding-left: 5px;
`;

export const PostHeaderUserTxt = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const PostHeaderOptions = styled(Feather)`
  font-size: 20px;
`;

export const PostImgArea = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const PostImg = styled.Image`
  width: 100%;
  height: 400px;
`;

export const PostAreaInterection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const PostInteractionButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostInteractionButton = styled.TouchableOpacity``;

export const ButtonHeart = styled(AntDesign)<{ like: boolean }>`
  padding-right: 10px;
  font-size: 20px;
  color: ${props=>props.like ? 'red' : 'black'};
`;

export const ButtonChat = styled(Ionic)`
  padding-right: 10px;
  font-size: 20px;
`;

export const ButtonNav = styled(Feather)`
  font-size: 20px;
`;

export const PostFooter = styled.View`
  padding: 15px;
`;

export const PostFooterTxt = styled.Text``;

export const PostFooterComments = styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 2px;
`;

export const PostFooterSeeComments = styled.Text`
  opacity: 0.4px;
  padding: 2px;
`;

export const PostFooterAddComment = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PostFooterBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostFooterIcon = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  background-color: orange;
  margin-right: 10px;
`;

export const PostFooterInputAddComment = styled.TextInput`
  opacity: 0.5px;
`;

export const PostFooterIconsView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PostFooterIcons = styled(Entypo)<{ color: string }>`
  font-size: 15px;
  color: ${props=>props.color};
  margin-right: 10px;
`;