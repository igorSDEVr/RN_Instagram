import { useState } from 'react';
import * as C from './styled';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  id: number;
  name: string;
  accountName: string;
  profileImage: string;
};

export const ProfileButtons = ({id, name, accountName, profileImage}: Props) => {
  const { navigate } = useNavigation();
  const [follow, setFollow] = useState<boolean>(false);
  return (
    <>
      {id === 0 ? (
        <C.Container>
          <C.Touch1
            onPress={() =>
              navigate('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }>
            <C.View1>
              <C.Txt1>
                Edit Profile
              </C.Txt1>
            </C.View1>
          </C.Touch1>
        </C.Container>
      ) : (
        <C.View2>
          <C.Touch2
            onPress={() => setFollow(!follow)}>
            <C.View3 follow={follow}>
              <C.Txt2 follow={follow}>
                {follow ? 'Following' : 'Follow'}
              </C.Txt2>
            </C.View3>
          </C.Touch2>
          <C.View4>
            <C.Txt3>Message</C.Txt3>
          </C.View4>
          <C.View5>
            <Feather
              name="chevron-down"
              style={{fontSize: 20, color: 'black'}}
            />
          </C.View5>
        </C.View2>
      )}
    </>
  );
};