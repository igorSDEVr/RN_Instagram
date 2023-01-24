import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Status } from '@app/components/Status';
import { FriendProfile } from '@app/components/FriendProfile';
import { EditProfile } from '@app/components/EditProfile';
import { BottomTabScreen } from './BottomTabs.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export const RootStack = () => (
  <Navigator
  screenOptions={{
    headerShown: false,
  }}>
    <Screen name="Bottom" component={BottomTabScreen} />
    <Screen name="Status" component={Status} />
    <Screen name="FriendProfile" component={FriendProfile} />
    <Screen name="EditProfile" component={EditProfile} />
</Navigator>
);