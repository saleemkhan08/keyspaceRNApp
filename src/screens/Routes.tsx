import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NotificationsScreen from 'screens/Notifications';
import ChatScreen from 'screens/Chat';
import ComplaintsScreen from 'screens/Complaints';
import ProfileTab from 'screens/Profile';
import HomeTab from 'screens/Home';
import SupportTab from 'screens/Support';

import {
  CHAT_SCREEN,
  COMPLAINTS_SCREEN,
  HOME_SCREEN,
  NOTIFICATION_SCREEN,
  HOME_TAB,
  SUPPORT_TAB,
  PROFILE_TAB,
  SUBSCRIPTION_SCREEN,
} from 'utils/constants';
import TabIcon from 'components/TabIcon';
import {baseStyles, colors} from 'src/utils/styles';
import EditSubscription from './Subscriptions/EditSubscription';

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName={HOME_TAB}
    screenOptions={TabIcon}
    tabBarOptions={{
      activeTintColor: colors.accent,
      inactiveTintColor: colors.primary,
      showLabel: false,
      style: baseStyles.tabBar,
    }}>
    <Tab.Screen name={PROFILE_TAB} component={ProfileTab} />
    <Tab.Screen name={HOME_TAB} component={HomeTab} />
    <Tab.Screen name={SUPPORT_TAB} component={SupportTab} />
  </Tab.Navigator>
);

const HomeStack = createStackNavigator();

const UsersScreens = () => (
  <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
    <HomeStack.Screen
      name={HOME_SCREEN}
      component={HomeTabs}
      options={{
        title: 'KeySpace',
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name={NOTIFICATION_SCREEN}
      component={NotificationsScreen}
      options={{title: 'Notifications'}}
    />
    <HomeStack.Screen
      name={CHAT_SCREEN}
      component={ChatScreen}
      options={{title: 'Live Chat'}}
    />
    <HomeStack.Screen
      name={COMPLAINTS_SCREEN}
      component={ComplaintsScreen}
      options={{title: 'Complaints'}}
    />
    <HomeStack.Screen
      name={SUBSCRIPTION_SCREEN}
      component={EditSubscription}
      options={{title: 'Subscription'}}
    />
  </HomeStack.Navigator>
);

export default UsersScreens;
