import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/home';
import HomeScreen from '../screens/home';
import OrderHistoryScreen from '../screens/order_history';
import FavoritesScreen from '../screens/favorites';
import CartScreen from '../screens/cart';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyle}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.bottomIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.bottomIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.bottomIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.bottomIconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 2,
    elevation: 0,
    borderTopColor: 'transparent',
    paddingTop: 10, 
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default TabNavigator;
