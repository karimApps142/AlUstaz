import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LectureDetailsScreen,
  LecturesScreen,
  NewLectureScreen,
  NewSubjectScreen,
  OnboardingScreen,
  SubscriptionDetailsScreen,
  SubscriptionScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    <Stack.Screen
      name="SubscriptionDetails"
      component={SubscriptionDetailsScreen}
    />
    <Stack.Screen name="NewSubject" component={NewSubjectScreen} />
    <Stack.Screen name="Lectures" component={LecturesScreen} />
    <Stack.Screen name="NewLecture" component={NewLectureScreen} />
    <Stack.Screen name="LectureDetails" component={LectureDetailsScreen} />
  </Stack.Navigator>
);

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

export {AuthNavigator, StackNavigator};
