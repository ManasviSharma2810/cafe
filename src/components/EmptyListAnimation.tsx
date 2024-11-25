import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import Coffecup from '../lottie/coffeecup.json';

interface EmptyListProps {
  title: string;
}
const EmptyListAnimation: React.FC<EmptyListProps> = ({title}) => {
  return (
    <View style={styles.emptyCartContainer}>
      <LottieView
        source={Coffecup}
        style={styles.lottieStyle}
        autoPlay
        loop
      
      />
A
      <Text style={styles.lottieText}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottieStyle: {
    height: 150,
  },
  lottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});
export default EmptyListAnimation;
