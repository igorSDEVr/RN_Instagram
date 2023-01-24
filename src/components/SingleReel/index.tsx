import { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import * as C from './styled';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import { VideoDataType } from '@app/data/videoData';

type Props = {
  item: VideoDataType;
  index: number;
  currentIndex: number;
}

export const SingleReel = ({item, index, currentIndex}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <C.Container width={windowWidth} height={windowHeight}>
      <C.Touch1
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
      >
        <Video
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
          videoRef={videoRef}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          muted={mute}
        />
      </C.Touch1>
      <C.Volume
        mute={mute}
        name="volume-mute"
      />
      <C.View2 width={windowWidth}>
        <C.View3>
          <C.Touch2>
            <C.View4>
              <C.View5>
                <C.Img1
                  style={{resizeMode: 'cover'}}
                  source={require('@app/assets/storage/images/post1.jpg')}//item.postProfile
                />
              </C.View5>
              <C.Txt1>{item.title}</C.Txt1>
            </C.View4>
          </C.Touch2>
          <C.Txt2>{item.description}</C.Txt2>
          <C.View6>
            <C.NoteMusical
              name="ios-musical-note"
            />
            <C.Txt3>Original Audio</C.Txt3>
          </C.View6>
        </C.View3>
      </C.View2>
      <C.View7>
        <C.Touch3 onPress={() => setLike(!like)}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <C.Txt4>{item.likes}</C.Txt4>
        </C.Touch3>
        <C.Touch3>
          <Ionic
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </C.Touch3>
        <C.Touch3>
          <Ionic
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </C.Touch3>
        <C.Touch3>
          <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </C.Touch3>
        <C.View8>
          <C.Img2
            style={{resizeMode: 'cover'}}
            source={item.postProfile}
          />
        </C.View8>
      </C.View7>
    </C.Container>
  );
};