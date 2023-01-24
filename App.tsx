import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import { RootStack } from '@app/navigators/RootStack.routes';

AntDesign.loadFont().then();
Ionicons.loadFont().then();
Feather.loadFont().then();
FontAwesome.loadFont().then();
Entypo.loadFont().then();

export const App = () => (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
);