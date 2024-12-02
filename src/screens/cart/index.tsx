import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useStore} from '../../store/store';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import PaymentFooter from '../../components/PaymentFooter';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import CartItems from '../../components/CartItems';
import ClearOrderHistory from '../../components/ClearOrderHistory';
import GradientBGIcon from '../../components/GradientBGIcon';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);

  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  let tabBarHeight = 0;
  try {
    tabBarHeight = useBottomTabBarHeight();
  } catch {
    console.warn('Screen is not inside a BottomTabNavigator.');
  }

  // console.log('CartList:', CartList.length);
  // console.log('CartPrice:', CartPrice);
  const buttonPressHandler = () => {
    navigation.navigate('PaymentScreen');
  };
  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
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
        <Text style={styles.headerText}>Cart</Text>
        <View style={styles.emptyView} />
      </View>
      {/* <ClearOrderHistory/> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            {CartList.length === 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
              <View>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => {
                      navigation.push('DetailScreen', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}>
                    <CartItems
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length !== 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : null}
        </View>
      </ScrollView>
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
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
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
    marginTop: 25,
  },
});

export default CartScreen;
