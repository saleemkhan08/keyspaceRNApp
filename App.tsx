import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from 'screens/Onboarding';
import UsersScreens from 'src/screens/Routes';
import {USER_SCREENS, ONBOARDING_SCREEN} from 'utils/constants';
import AuthProvider, {AuthContext} from 'src/utils/AuthProvider';
const AppStack = createStackNavigator();

const AppRoute = () => {
  const {user} = useContext(AuthContext);
  return (
    <AppStack.Navigator initialRouteName={ONBOARDING_SCREEN}>
      {user ? (
        <AppStack.Screen
          name={USER_SCREENS}
          component={UsersScreens}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AppStack.Screen
          name={ONBOARDING_SCREEN}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
      )}
    </AppStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
