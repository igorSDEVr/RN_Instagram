import { TouchableOpacity } from 'react-native';
import * as C from './styled';
import {useNavigation} from '@react-navigation/native';
import { storyInfo } from '@app/data/storyInfo';

export const Stories = () => {
  const { navigate } = useNavigation();

  return (
    <C.Container>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigate('Status', {
                name: data?.name,
                image: data?.image,
              })
            }>
            <C.StoriesWrap>
              {data?.id == 1 ? (
                <C.Plus>
                  <C.PlusIcon />
                </C.Plus>
              ) : null}
              <C.StorieCircle>
                <C.StorieImg
                  source={data?.image}
                />
              </C.StorieCircle>
              <C.StorieTitle ide={data?.id}>{data?.name}</C.StorieTitle>
            </C.StoriesWrap>
          </TouchableOpacity>
        );
      })}
    </C.Container>
  );
};