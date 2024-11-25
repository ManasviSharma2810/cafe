import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../assets/images';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import GradientBGIcon from '../../components/GradientBGIcon';
import PaymentMethod from '../../components/PaymentMethod';
import PaymentFooter from '../../components/PaymentFooter';
import { useStore } from '../../store/store';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: images.gpay,
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: images.apple,
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: images.amazonPay,
    isIcon: false,
  },
];
const PaymentScreen = () => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const CartPrice = useStore((state: any) => state.CartPrice);

  console.log("i m here");
  
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.arrowStyle}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payments</Text>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.paymentOptionContainer}>
          {PaymentList.map((data:any)=>(
            <TouchableOpacity key={data.name} onPress={()=>{
              setPaymentMode(data.name);
            }}>
              <PaymentMethod paymentMode={paymentMode}
              name ={data.name}
              icon = {data.icon}
              isIcon = {data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter  buttonPressHandler={()=>{

      }}
              buttonTitle="Pay From Credit"
              price={{price: CartPrice, currency: '$'}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_32,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    marginTop: 20,
  },
  emptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  arrowStyle: {
    marginTop: 15,
  },
  paymentOptionContainer: {
    gap: SPACING.space_15,
    padding: SPACING.space_15,
  },
});
export default PaymentScreen;
