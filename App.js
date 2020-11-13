/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GooglePlay from './src/pages/GooglePlay';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle='light-content' backgroundColor='#202125' />
        <SafeAreaView>
          <GooglePlay/>
        </SafeAreaView>
      </>
    );
  }
};

