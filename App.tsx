import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Scanner from './components/Scanner';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back}
        source={require('./assets/images/home.png')}>
        <Scanner />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    flex: 1,
  },
});
