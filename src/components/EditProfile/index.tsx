import * as C from './styled';
import { ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

export const EditProfile = () => {
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();
  // const {name, accountName, profileImage} = params;
  const name = 'name fake';
  const accountName = 'acount fake';
  const profileImg = require('@app/assets/storage/images/post1.jpg')
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <C.Container>
      <C.View1>
        <C.Touch2 onPress={() => goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </C.Touch2>
        <C.Txt>Edit Profile</C.Txt>
        <C.Touch3
          onPress={() => {
            TostMessage();
            goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </C.Touch3>
      </C.View1>
      <C.View2>
        <C.Img1 source={profileImg} />
        <C.Txt3>Change profile photo</C.Txt3>
      </C.View2>
      <C.View3>
        <C.View4>
          <C.Txt4>Name</C.Txt4>
          <C.TxtInput
            placeholder="name"
            defaultValue={name}
          />
        </C.View4>
        <C.View5>
          <C.Txt5>Username</C.Txt5>
          <C.Txti
            placeholder="accountname"
            defaultValue={accountName}
          />
        </C.View5>
        <C.View5>
          <C.Txti
            placeholder="Website"
          />
        </C.View5>
        <C.View5>
          <C.Txti
            placeholder="Bio"
          />
        </C.View5>
      </C.View3>
      <C.View4>
        <C.Txt2>Switch to Professional account</C.Txt2>
        <C.Txt2>Persnol information setting</C.Txt2>
      </C.View4>
    </C.Container>
  );
};