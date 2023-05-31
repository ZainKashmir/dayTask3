import React, {useEffect, useState} from 'react';

import {View, StyleSheet, Linking, Dimensions} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Logos from './Logos';
import TorchLight from './Torch';

export default function Scanner() {
  const [borderColor, setBorderColor] = useState('white');

  const startBlinkingAnimation = () => {
    let isBlinking = true;

    const blink = () => {
      if (!isBlinking) return;

      setBorderColor(prevColor =>
        prevColor === 'white' ? 'transparent' : 'white',
      );

      setTimeout(blink, 1000);
    };

    blink();

    return () => {
      isBlinking = false;
    };
  };

  useEffect(() => {
    const unsubscribe = startBlinkingAnimation();
    return () => {
      unsubscribe();
    };
  }, []);

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const markerStyle = {
    borderColor: borderColor,
    width: 300,
    height: 300,
  };

  return (
    <View style={styles.container}>
      <View style={styles.QRScanner}>
        <Logos />
        <QRCodeScanner
          showMarker
          onRead={onSuccess}
          markerStyle={markerStyle}
        />
      </View>
      <TorchLight />
    </View>
  );
}
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
  },
  QRScanner: {
    flex: 1,
  },
});
