import React, {useState, useEffect } from 'react';
import { Animated } from 'react-native';
import * as C from './styled';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <C.Container>
      <C.StyledStatusBar backgroundColor="black" barStyle="light-content" />
      <C.View2>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </C.View2>
      <C.View3>
        <C.View4>
          <C.Img1 source={image} />
        </C.View4>
        <C.View5>
          <C.Txt1>{name}</C.Txt1>
          <C.Touch1 onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </C.Touch1>
        </C.View5>
      </C.View3>
      <C.Img2
        source={image}
      />
      <C.View6>
        <C.TxtInput
          placeholder="send message"
          placeholderTextColor="white"
        />
        <C.Touch2 onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={{fontSize: 30, color: 'white'}} />
        </C.Touch2>
      </C.View6>
    </C.Container>
  );
};