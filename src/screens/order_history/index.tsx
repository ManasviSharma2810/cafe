import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {useStore} from '../../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import LottieView from 'lottie-react-native';
import successFul from '../../lottie/successful.json';
import OrderHistoryCard from '../../components/OrderHistoryCard';
const OrderHistoryScreen = ({navigation}:any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  console.log('History- ', OrderHistoryList.length);
   let tabBarHeight = 20; 
  try {
    tabBarHeight = useBottomTabBarHeight();
  } catch (error) {
    console.warn('Screen is not inside a BottomTabNavigator.');
  }
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <HeaderBar title="Order History" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
               {showAnimation ? (
        <LottieView
          style={styles.lottieAnimationContainer}
          source={successFul}
          autoPlay
          loop
        />
      ) : (
        <View>
          {OrderHistoryList.map((data: any, index: any) => (
            <OrderHistoryCard
              key={index.toString()}
              navigationHandler={() => {}}
              CartList={data.CartList}
              CartListPrice={data.CartListPrice}
              OrderDate={data.OrderDate}
            />
          ))}
        </View>
      )}
     <View style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            {OrderHistoryList.length === 0 ? (
              <EmptyListAnimation title={'No Order History'} />
            ) : (
              <View> </View>
            )}
          </View>
          <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
               navigation.navigate('Home')
              }}>
              <Text style={styles.ButtonText}>Back to Home</Text>
            </TouchableOpacity>
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
  itemContainer: {
    flex: 1,
  },
  lottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_40,
    borderRadius: BORDERRADIUS.radius_15,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});
export default OrderHistoryScreen;
