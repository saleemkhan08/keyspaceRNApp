import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HOME_TAB, PROFILE_TAB} from 'src/utils/constants';
import {fontSize} from 'src/utils/styles';
interface Props {
  route: {name: string};
}
function TabIcon(props: Props) {
  const {route} = props;
  return {
    tabBarIcon: function ({focused, color}: {focused: boolean; color: string}) {
      let iconName = 'home-outline';
      switch (route.name) {
        case HOME_TAB: {
          iconName = focused ? 'home' : 'home-outline';
          break;
        }
        case PROFILE_TAB: {
          iconName = focused ? 'person' : 'person-outline';
          break;
        }
        default: {
          iconName = focused ? 'wallet' : 'wallet-outline';
          break;
        }
      }
      return <Ionicons name={iconName} color={color} size={fontSize.lg} />;
    },
  };
}

TabIcon.defaultProps = {};

export default TabIcon;
