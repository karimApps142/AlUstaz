import React from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator, {AuthNavigator} from './src/navigations/StackNavigator';
import {COLORS} from './src/constants/theme';

I18nManager.forceRTL(true);

function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar backgroundColor={COLORS.primary} />
        <AuthNavigator />
      </>
    </NavigationContainer>
  );
}

export default App;
