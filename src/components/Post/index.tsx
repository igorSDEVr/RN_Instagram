import { useState } from 'react';
import * as C from './styled';
import { postInfo } from '@app/data/postInfo';

export const Post = () => (

  <C.Container>
    {postInfo.map((data, index) => {
      const [like, setLike] = useState(data.isLiked);
        return (
          <C.PostV key={index}>
          <C.PostHeader>
            <C.PostHeaderTitle>
              <C.PostHeaderImg source={data.postPersonImage} />
              <C.PostHeaderUser>
                <C.PostHeaderUserTxt>{data.postTitle}</C.PostHeaderUserTxt>
              </C.PostHeaderUser>
            </C.PostHeaderTitle>
              <C.PostHeaderOptions name="more-vertical" />
            </C.PostHeader>
            <C.PostImgArea>
              <C.PostImg source={data.postImage} />
            </C.PostImgArea>
            <C.PostAreaInterection>
              <C.PostInteractionButtons>
                <C.PostInteractionButton onPress={() => setLike(!like)}>
                  <C.ButtonHeart
                    name={like ? 'heart' : 'hearto'}
                    like={like}
                  />
                </C.PostInteractionButton>
                <C.PostInteractionButton>
                  <C.ButtonChat name="ios-chatbubble-outline" />
                </C.PostInteractionButton>
                <C.PostInteractionButton>
                  <C.ButtonNav name="navigation" />
                </C.PostInteractionButton>
              </C.PostInteractionButtons>
              <C.ButtonNav name="bookmark" />
            </C.PostAreaInterection>
            <C.PostFooter>
              <C.PostFooterTxt>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </C.PostFooterTxt>
              <C.PostFooterComments>
                If enjoy the video ! Please like and Subscribe :)
              </C.PostFooterComments>
              <C.PostFooterSeeComments>View all comments</C.PostFooterSeeComments>
              <C.PostFooterAddComment>
                <C.PostFooterBox>
                  <C.PostFooterIcon source={data.postPersonImage} />
                  <C.PostFooterInputAddComment placeholder="Add a comment " />
                </C.PostFooterBox>
                <C.PostFooterIconsView>
                  <C.PostFooterIcons name="emoji-happy" color='lightgreen' />
                  <C.PostFooterIcons name="emoji-neutral" color='pink' />
                  <C.PostFooterIcons name="emoji-sad" color='red' />
                </C.PostFooterIconsView>
              </C.PostFooterAddComment>
            </C.PostFooter>
          </C.PostV>
        );
      })}
    </C.Container>
  );