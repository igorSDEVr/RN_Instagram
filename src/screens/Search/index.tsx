import { useState } from 'react';
import * as C from './styled';
import { Dimensions } from 'react-native';
import { SearchBox } from '@app/components/SerachBox';
import { SearchContent } from '@app/components/SearchContent';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <C.Container>
      <C.StyledScrollView >
        <SearchBox />
        <SearchContent data={getData} />
        <C.SearchPlus>
          <C.PlusIcon name="pluscircleo" />
        </C.SearchPlus>
      </C.StyledScrollView>
      {image ? (
        <C.ModalImage>
          <C.StyledStatusBar backgroundColor="#525252" barStyle="dark-content" />
          <C.ModalImageView top={windowHeight} left={windowWidth}>
            <C.ModalTitleView>
              <C.ModalTitleImg source={image} />
              <C.ModalTitleBox>
                <C.ModalTitleTxt>the_anonymous_guy</C.ModalTitleTxt>
              </C.ModalTitleBox>
            </C.ModalTitleView>
            <C.ModalImg source={image} />
            <C.ModalFooter>
              <Ionic name="ios-heart-outline" style={{fontSize: 26}} />
              <Ionic name="ios-person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </C.ModalFooter>
          </C.ModalImageView>
        </C.ModalImage>
      ) : null}
    </C.Container>
  );
};