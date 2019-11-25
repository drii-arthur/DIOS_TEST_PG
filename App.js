/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import MainMenu from './src/pages/mainMenu'
import add from './src/pages/add'
import Profile from './src/pages/profile'
import Edit from './src/pages/edit'

const AppNavigator = createStackNavigator({
  MainMenu: MainMenu,
  add: add,
  Profile: Profile,
  Edit: Edit
}, {
  headerMode: 'none'
})

const Apps = createSwitchNavigator({
  AppNavigator,
})

const AppContainer = createAppContainer(Apps)

const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
}

export default App;
