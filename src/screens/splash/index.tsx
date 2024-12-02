import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import TabNavigator from '../../navigation/TabNavigator';
import SignUP from '../signup';
import {styles} from './styles';

import LottieView from 'lottie-react-native';
import splashImage from '../../lottie/splash.json';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={splashImage}
          style={{width: 300, height: 200, alignSelf: 'center'}}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash;
