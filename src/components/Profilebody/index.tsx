import * as C from './styled';
import { Text, Image, ImageSourcePropType} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  name: string;
  accountName: string;
  profileImage: ImageSourcePropType;
  post: string;
  followers: string;
  following: string;
};
export const ProfileBody = ({...props}: Props) => {
  return (
    <C.Container>
      {props.accountName ? (
        <C.View1>
          <C.View2>
            <C.Txt1>
              {props.accountName}
            </C.Txt1>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </C.View2>
          <C.View3>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </C.View3>
        </C.View1>
      ) : null}
      <C.View4>
        <C.View5>
          {/* <Image
            source={props.profileImage}
          /> */}
          <C.Txt2>
            {props.name}
          </C.Txt2>
        </C.View5>
        <C.View6>
          <C.Txt3>{props.post}</C.Txt3>
          <Text>Posts</Text>
        </C.View6>
        <C.View6>
          <C.Txt3>{props.followers}</C.Txt3>
          <Text>Followers</Text>
        </C.View6>
        <C.View6>
          <C.Txt3>{props.following}</C.Txt3>
          <Text>Following</Text>
        </C.View6>
      </C.View4>
    </C.Container>
  );
};