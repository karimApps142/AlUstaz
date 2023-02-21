import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddLectureScreen,
  AgendaDetailsScreen,
  AgendaScreen,
  ChatScreen,
  CreateAgendaScreen,
  HomeScreen,
  LectureDetailsScreen,
  LecturesScreen,
  PaymentScreen,
  ProfileScreen,
  SubscriptionDetailsScreen,
  SubscriptionScreen,
} from '../screens';
import {LoginScreen, OnboardingScreen, RegisterScreen} from '../screens/auth';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
    <Stack.Screen name="sub" component={SubscriptionStack} />
  </Stack.Navigator>
);
const SubscriptionStack = () => (
  <Stack.Navigator
    initialRouteName="Subscription"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    <Stack.Screen
      name="SubscriptionDetails"
      component={SubscriptionDetailsScreen}
    />
    <Stack.Screen name="payment" component={PaymentScreen} />
  </Stack.Navigator>
);
const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="homeStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="homeStack" component={HomeScreen} />

    <Stack.Screen name="Lectures" component={LecturesScreen} />
    <Stack.Screen name="LectureDetails" component={LectureDetailsScreen} />
    <Stack.Screen name="AddLecture" component={AddLectureScreen} />
  </Stack.Navigator>
);

const AgendaStack = () => (
  <Stack.Navigator
    initialRouteName="agendaStack"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="agendaStack" component={AgendaScreen} />
    <Stack.Screen name="createAgenda" component={CreateAgendaScreen} />
    <Stack.Screen name="agendaDetail" component={AgendaDetailsScreen} />
    <Stack.Screen name="chat" component={ChatScreen} />
  </Stack.Navigator>
);

export {AuthNavigator, SubscriptionStack, HomeNavigator, AgendaStack};
