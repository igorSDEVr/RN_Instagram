import {useState} from 'react';
import * as C from './styled';
import {View, Text, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProfileBody } from '../Profilebody';
import { ProfileButtons } from '@app/components/ProfileButtons';
import { FriendsProfileData } from '@app/data/friendsProfiledata';

export const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, follow, post, followers, following} = route.params;
  return (
    <C.Container>
      <C.View2>
        <C.Touch1 onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={{fontSize: 20, color: 'black'}} />
        </C.Touch1>
        <C.View3>
          <C.Txt1>{name}</C.Txt1>
          <Feather
            name="more-vertical"
            style={{fontSize: 20, color: 'black'}}
          />
        </C.View3>
      </C.View2>
      <ProfileBody
        name={name}
        accountName='acountname fake'
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons id={1} name={name} accountName='aaaa' profileImage={profileImage} />
      <C.Txt2>Suggested for you</C.Txt2>
      <C.StyledScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <C.View4>
                      <C.Touch2
                        onPress={() => setClose(true)}>
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: 'black',
                            opacity: 0.5,
                          }}
                        />
                      </C.Touch2>
                      <C.Img2
                        source={data.profileImage}
                      />
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {data.name}
                      </Text>
                      <Text style={{fontSize: 12}}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{width: '80%', paddingVertical: 10}}>
                        <C.View5 isFollow={isFollow}>
                          <Text style={{color: isFollow ? 'black' : 'white'}}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </C.View5>
                      </TouchableOpacity>
                    </C.View4>
                  )}
                </View>
              );
            })}
      </C.StyledScrollView>
    </C.Container>
  );
};