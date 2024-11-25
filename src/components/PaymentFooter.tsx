import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface PriceProps {
  price: string;
  currency: string;
}
interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: Function;
  buttonTitle: string;
}
const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceText}>
          {price.currency}
          <Text style={styles.price}> {price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>{
        buttonPressHandler()
      }}>
        <Text style={styles.btnText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  priceFooter: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:SPACING.space_20,
    padding:SPACING.space_20,
  },
  priceContainer:{
    alignItems:'center',
    width:100
  },
  priceTitle:{
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
  },
  priceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryOrangeHex,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
  btnStyle: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 1.8,
    borderRadius: BORDERRADIUS.radius_20,
  },
  btnText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});
export default PaymentFooter;
