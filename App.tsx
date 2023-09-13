/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DrawerContainer from './containers/DrawerContainer';
import StackContainer from './containers/StackContainer';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './screens/LogInScreen';

function App(): JSX.Element {

  useEffect(() => {
    // SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#7210ff"} />
      <StackContainer />
    </NavigationContainer>
    // <LogIn />
  );
}

const styles = StyleSheet.create({
  
});

export default App;
