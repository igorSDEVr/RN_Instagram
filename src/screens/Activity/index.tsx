import { useState } from 'react';
import * as C from './styled';
import {View, Text, TouchableOpacity } from 'react-native';
import { FriendsProfileData } from '@app/data/friendsProfiledata';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export const Activity = () => {
  const { navigate } = useNavigation();
  return (
    <C.Container>
      <C.ActivityHeader>
        Activity
      </C.ActivityHeader>
      <C.StyledScrollView>
        <C.Txt>This Week</C.Txt>
        <C.HeaderBox>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate('FriendProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }
                key={index}>
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text> Started following you</Text>
        </C.HeaderBox>
        <Text style={{fontWeight: 'bold'}}>Earlier</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <C.View1>
                <C.Touch1
                  onPress={() =>
                    navigate('FriendProfile', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                >
                  <C.Img1
                    source={data.profileImage}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                    you might know, is on instagram
                  </Text>
                </C.Touch1>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{width: follow ? 72 : 68}}>
                  <C.View2 follow={follow}>
                    <Text style={{color: follow ? 'black' : 'white'}}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </C.View2>
                </TouchableOpacity>
              </C.View1>
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggestions for you
        </Text>
        {FriendsProfileData.slice(6.12).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          const [close, setClose] = useState(false);
          return (
            <View key={index}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <C.Touch2
                      onPress={() =>
                        navigate('FriendProfile', {
                          name: data.name,
                          profileImage: data.profileImage,
                          follow: follow,
                          post: data.posts,
                          followers: data.followers,
                          following: data.following,
                        })
                      }
                    >
                      <C.Img2
                        source={data.profileImage}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {data.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </C.Touch2>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{
                          width: follow ? 90 : 68,
                        }}>
                        <C.View2 follow={follow}>
                          <Text style={{color: follow ? 'black' : 'white'}}>
                            {follow ? 'following' : 'follow'}
                          </Text>
                        </C.View2>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollow(!follow)}
                          style={{
                            width: follow ? 90 : 68,
                          }}>
                          <C.View2 follow={follow}>
                            <Text style={{color: follow ? 'black' : 'white'}}>
                              {follow ? 'following' : 'follow'}
                            </Text>
                          </C.View2>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setClose(true)}
                          style={{paddingHorizontal: 10}}>
                          <AntDesign
                            name="close"
                            style={{fontSize: 14, color: 'black', opacity: 0.8}}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggetions</Text>
        </View>
      </C.StyledScrollView>
    </C.Container>
  );
};