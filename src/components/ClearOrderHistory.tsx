import React from 'react';
import {Button, View} from 'react-native';
import { useStore } from '../store/store';


const ClearOrderHistory = () => {
  const clearOrderHistory = useStore((state:any) => state.clearOrderHistory);

  return (
    <View>
      <Button title="Clear Order History" onPress={clearOrderHistory} />
    </View>
  );
};

export default ClearOrderHistory;
