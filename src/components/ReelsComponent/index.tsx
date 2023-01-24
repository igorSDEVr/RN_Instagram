import { useId, useState } from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { videoData } from '@app/data/videoData';
import { SingleReel } from '../SingleReel';

export const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};