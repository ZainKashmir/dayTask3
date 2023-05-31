import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Torch from 'react-native-torch';

export default function TorchLight() {
  const [isTorchOn, setTorchOn] = useState(false);

  const toggleTorch = () => {
    Torch.switchState(!isTorchOn);
    setTorchOn(!isTorchOn);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/qr.png')} />
      </View>
      <View>
        <Text style={styles.text}>History</Text>
      </View>
      <TouchableOpacity onPress={toggleTorch}>
        <Image
          source={require('../assets/images/torch.png')}
          style={isTorchOn ? styles.logoOn : styles.logoOff}
        />
      </TouchableOpacity>
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
  logoOn: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoOff: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  text: {
    color: 'white',
  },
});
