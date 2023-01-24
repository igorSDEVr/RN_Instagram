import * as C from './styled';
import {View, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

export const SearchBox = () => {
  return (
    <C.Container>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <C.TxtInput
        placeholder="Search"
        placeholderTextColor="#909090"
      />
    </C.Container>
  );
};