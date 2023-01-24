export function getTabBarIconName(actualRoute: string) {
  let iconName;
  let size;
  switch(actualRoute) {
    case 'Home': 
      iconName = actualRoute === 'Home' ? 'home-sharp' : 'home-outline';
      size = actualRoute === 'Home' ? size + 8 : size + 2;
      
    case 'Search':
      iconName = actualRoute === 'Search' ? 'search' : 'ios-search-outline';

    case 'Reels':
      iconName = actualRoute === 'Reels'
      ? 'caret-forward-circle'
      : 'caret-forward-circle-outline';

    case 'Activity':
      iconName = actualRoute === 'Activity' ? 'ios-heart' : 'ios-heart-outline';

    case 'Profile':
      iconName = actualRoute === 'Profile' ? 'ios-person-circle' : 'ios-person-outline';
  }
  return {iconName, size}
};