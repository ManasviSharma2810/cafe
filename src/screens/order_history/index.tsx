import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { useStore } from '../../store/store'
const OrderHistoryScreen = () => {
  const OrderHistoryList = useStore((state:any)=>state.OrderHistoryList);
  console.log('History- ',OrderHistoryList.length);
  
  return (
    <View>
        <Text>
            OrderHistory
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({

})
export default OrderHistoryScreen
