import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Logos() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/path.png')} />
      </View>
      <View style={[styles.image, styles.logo]}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/images/london.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  logo: {
    marginLeft: 30,
  },
});
