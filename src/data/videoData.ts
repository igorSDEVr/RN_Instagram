import { ImageSourcePropType } from 'react-native';

export type VideoDataType = {
  video: ImageSourcePropType;
  postProfile: ImageSourcePropType;
  title: string;
  description: string;
  likes: string;
  isLike: boolean
};

export const videoData: VideoDataType[] = [
  {
    video: require('@app/assets/storage/videos/video1.mp4'),
    postProfile: require('@app/assets/storage/images/post1.jpg'),
    title: 'Ram_Charan',
    description: 'Feel the buity of nature',
    likes: '245k',
    isLike: false,
  },
  {
    video: require('@app/assets/storage/videos/video2.mp4'),
    postProfile: require('@app/assets/storage/images/post2.jpg'),
    title: 'The_Groot',
    description: "It's a tea time",
    likes: '656k',
    isLike: false,
  },
  {
    video: require('@app/assets/storage/videos/video3.mp4'),
    postProfile: require('@app/assets/storage/images/post3.jpg'),
    title: 'loverland',
    description: 'Feel the buity of nature',
    likes: '243k',
    isLike: false,
  },
  {
    video: require('@app/assets/storage/videos/video4.mp4'),
    postProfile: require('@app/assets/storage/images/post4.jpg'),
    title: 'mr. bean',
    description: 'How cute it is !!',
    likes: '876k',
    isLike: false,
  },
];