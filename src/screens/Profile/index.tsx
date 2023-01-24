import { View } from 'react-native';
import * as C from './styled';
import { ProfileBody } from '@app/components/Profilebody';
import { ProfileButtons } from '@app/components/ProfileButtons';
import Entypo from 'react-native-vector-icons/Entypo';
import { BottomTabView } from '@app/components/BottomTabView';

export const Profile = () => {
  let circuls: JSX.Element[] = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <C.View0>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </C.View0>
        ) : (
          <C.View00></C.View00>
        )}
      </View>,
    );
  }

  return (
    <C.Container>
      <C.View1>
        <ProfileBody
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('@app/assets/storage/images/userProfile.png')}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('@app/assets/storage/images/userProfile.png')}
        />
      </C.View1>
      <C.View2>
        <C.Txt>Story Highlights</C.Txt>
        <C.StyledScrollView>
          <>
            {circuls}
          </>
        </C.StyledScrollView>
      </C.View2>
      <BottomTabView />
    </C.Container>
  );
};