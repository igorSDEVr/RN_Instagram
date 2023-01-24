import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { Home } from '@app/screens/Home';
import { Search } from '@app/screens/Search';
import { Reels } from '@app/screens/Reels';
import { Activity } from '@app/screens/Activity';
import { Profile } from '@app/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabScreen = () => {
  

  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },

        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Reels" component={Reels} />
      <Screen name="Activity" component={Activity} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};