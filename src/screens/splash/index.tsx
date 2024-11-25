import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {myColor} from '../../utils/myColors';
import LinearGradient from 'react-native-linear-gradient';
// import {icons} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import TabNavigator from '../../navigation/TabNavigator';
import SignUP from '../signup';
import { styles } from './styles';

const Splash = ({navigation}:any) => {
 
  useEffect(() => {
  setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[myColor.primary, myColor.third]}
      style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.subtitle}>"Decafe"</Text>
        {/* <Image source={icons.cup} style={styles.icon} /> */}
        
        <Text style={styles.textStyle}>Let's begin with a cup of coffee..</Text>
      </View>
    </LinearGradient>
  );
};

export default Splash;
