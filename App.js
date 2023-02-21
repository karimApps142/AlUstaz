import React, {useState, useMemo} from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthNavigator,
  HomeNavigator,
  SubscriptionStack,
} from './src/navigations/StackNavigator';
import {COLORS} from './src/constants/theme';
import {DrawerNavigator} from './src/navigations/drawer';
import AuthContext from './src/context/AuthContext';
import localStorage from './src/server/localStorage';

I18nManager.forceRTL(true);

function App() {
  const [user, setUser] = useState(null);
  const [activeRoute, setActiveRoute] = useState('home');
  const [loading, setLoading] = useState(false);
  const trigger = useMemo(() => {
    return {
      updateUser: user => {
        setUser(user);
      },
      signout: () => {
        localStorage.removeToken().then(() => setUser(null));
      },
      setRoute: r => {
        setActiveRoute(r);
      },
    };
  });
  return (
    <AuthContext.Provider value={{user, trigger, activeRoute}}>
      <NavigationContainer>
        <>
          <StatusBar backgroundColor={COLORS.primary} />
          {!user ? <AuthNavigator /> : <DrawerNavigator />}
          {/* <HomeNavigator /> */}
          {/* <SubscriptionStack /> */}
          {/* <DrawerNavigator /> */}
        </>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
