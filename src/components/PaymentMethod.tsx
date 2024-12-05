import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface PaymentMethodProps {
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}
const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View
      style={[
        styles.paymentCardContainer,
        {
          borderColor:
            paymentMode === name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientWallet}>
          <View style={styles.walletRow}>
            <CustomIcon
              name={'wallet'}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}
            />
            <Text style={styles.paymentTitle}>{name}</Text>
          </View>
          <Text style={styles.paymentPrice}>$ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}>
          <Image source={icon} style={styles.paymentImage} />
          <Text style={styles.paymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  paymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_15 * 2,
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: 2,
  },
  LinearGradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.space_24,
    borderRadius: 25,
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    padding: 11,
  },
  paymentTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  LinearGradientRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2,
  },
  paymentPrice: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
    margin:10
  },
  paymentImage: {
    height: 50,
    width: 50,
    padding: 10,
  },
});
export default PaymentMethod;
