import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import TabNavigator from '../../navigation/TabNavigator';
import SignUP from '../signup';
import {styles} from './styles';

import LottieView from 'lottie-react-native';
import splashImage from '../../lottie/splash.json';
import { COLORS } from '../../theme/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux_store/redux_store';

const Splash = ({navigation}: any) => {
  const { hasSeenTutorial, isLoggedIn } = useSelector((state: RootState) => state.app);
  useEffect(() => {
    const navigateToNextScreen = setTimeout(() => {
      if (!hasSeenTutorial) {
        navigation.replace('Tutorial'); 
      } else if (!isLoggedIn) {
        navigation.replace('SignUp'); 
      } else {
        navigation.replace('HomeTab'); 
      }
    }, 2000); 
  }, [hasSeenTutorial, isLoggedIn, navigation]);

  return (
    <LinearGradient start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    colors={[COLORS.primaryOrangeHex, COLORS.primaryBlackHex]} style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={splashImage}
          style={{width: 400, height: 300, alignSelf: 'center'}}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default Splash;
