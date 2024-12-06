import React, {useState} from 'react';
import {View, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {useStore} from '../../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import LottieView from 'lottie-react-native';
import successFul from '../../lottie/successful.json';
import OrderHistoryCard from '../../components/OrderHistoryCard';
import { styles } from './styles';
const OrderHistoryScreen = ({navigation}:any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  console.log('History- ', OrderHistoryList.length);
   let tabBarHeight = 0; 
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
               navigation.navigate('HomeTab')
              }}>
              <Text style={styles.ButtonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
        
      </ScrollView>
      
    </View>
  );
};

export default OrderHistoryScreen;
