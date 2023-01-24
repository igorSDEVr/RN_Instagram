import * as C from './styled';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ReelsComponent } from '@app/components/ReelsComponent';
export const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <C.Container width={windowWidth} height={windowHeight}>
      <C.ReelsHeader>
        <C.Txt>Reels</C.Txt>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </C.ReelsHeader>
      <ReelsComponent />
    </C.Container>
  );
};