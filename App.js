
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Track: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})


export default createAppContainer(switchNavigator)