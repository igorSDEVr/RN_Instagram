import * as C from './styled';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Stories } from '@app/components/Stories';
import { Post } from '../../components/Post';

export const Home = () => {
  return (
    <C.Container>
      <C.StyledStatusBar />
      <C.Header>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <C.HeaderTxt>Instagram</C.HeaderTxt>
        <Feather name="navigation" style={{fontSize: 24}} />
      </C.Header>
      <C.StyledScroll>
        <Stories />
        <Post />
        <C.EndingOfPage>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 90, opacity: 0.2}}
          />
        </C.EndingOfPage>
      </C.StyledScroll>
    </C.Container>
  );
};