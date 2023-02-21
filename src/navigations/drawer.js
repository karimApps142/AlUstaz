import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './drawerContent';
import {AgendaStack, HomeNavigator, SubscriptionStack} from './StackNavigator';
import {ProfileScreen} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'sub'}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeNavigator} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="agenda" component={AgendaStack} />
    </Drawer.Navigator>
  );
};
