import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Splash from '../screens/splash';
import SignUP from '../screens/signup';
import DetailScreen from '../screens/details';
import PaymentScreen from '../screens/payment';
import {Screen} from 'react-native-screens';
import TabNavigator from './TabNavigator';
import CartScreen from '../screens/cart';
import OrderHistoryScreen from '../screens/order_history';
import CreateAccount from '../screens/create_acount';
import HomeScreen from '../screens/home';
import ForgotPassword from '../screens/forgot';
import TutorialScreen from '../screens/tutorial';
import Profile from '../screens/profile';
import FavoritesScreen from '../screens/favorites';
import PaymentMethod from '../screens/paymentMethod';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="SignUp" component={SignUP} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="History"
          component={OrderHistoryScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{animation: 'slide_from_bottom'}}
        />
         <Stack.Screen
          name="HomeTab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
          <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{animation: 'slide_from_bottom'}}
        />
         <Stack.Screen
          name="Tutorial"
          component={TutorialScreen}
          // options={{animation: 'slide_from_bottom'}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{animation: 'slide_from_bottom'}}
        />
         <Stack.Screen
          name="Fav"
          component={FavoritesScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
