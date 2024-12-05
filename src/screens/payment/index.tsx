import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {images} from '../../assets/images';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import GradientBGIcon from '../../components/GradientBGIcon';
import PaymentMethod from '../../components/PaymentMethod';
import PaymentFooter from '../../components/PaymentFooter';
import {useStore} from '../../store/store';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../components/CustomIcon';
import LottieView from 'lottie-react-native';
import successFul from '../../lottie/successful.json';
import {styles} from './styles';

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
const PaymentScreen = ({navigation}: any) => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [showAnimation, setShowAnimation] = useState(false);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.replace('History');
    }, 2000);
  };
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <LottieView
          style={styles.lottieAnimationContainer}
          source={successFul}
          autoPlay
          loop
        />
      ) : (
        <></>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.arrowStyle}
            onPress={() => {
              navigation.goBack();
            }}>
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
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card');
            }}>
            <View
              style={[
                styles.creditCardContainer,
                {
                  borderColor:
                    paymentMode == 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}>
              <Text style={styles.creditCardTitle}>Credit Card</Text>
              <View style={styles.creditCardBG}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.linearGradientStyle}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <View style={styles.creditCardRow}>
                    <CustomIcon
                      name="chip"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <CustomIcon
                      name="visa"
                      size={FONTSIZE.size_30 * 2}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>
                  <View style={styles.creditCardNumberContainer}>
                    <Text style={styles.creditCardNumber}>3845</Text>
                    <Text style={styles.creditCardNumber}>5845</Text>
                    <Text style={styles.creditCardNumber}>6456</Text>
                    <Text style={styles.creditCardNumber}>7455</Text>
                  </View>
                  <View style={styles.creditCardRow}>
                    <View style={styles.creditCardNameContainer}>
                      <Text style={styles.creditCardNameSubtitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.creditCardNameTitle}>
                        Robert Evans
                      </Text>
                    </View>
                    <View style={styles.creditCardDateContainer}>
                      <Text style={styles.creditCardNameSubtitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.creditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonPressHandler={buttonPressHandler}
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price: CartPrice, currency: '$'}}
      />
    </View>
  );
};

export default PaymentScreen;
