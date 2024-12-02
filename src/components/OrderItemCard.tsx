import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/theme';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: any;
  special_ingredient: string;
  prices: any;
  ItemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.cardLinearGradient}>
      <View style={styles.imageContainer}>
        <Image source={imagelink_square} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{name}</Text>
        {/* <Text style={styles.itemPrice}>${ItemPrice}</Text> */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardLinearGradient: {
    // padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageContainer: {
    width: 100,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    padding:8,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    color: COLORS.primaryWhiteHex,
    fontSize: 16,
    fontWeight: '600',
  },
  itemPrice: {
    color: COLORS.primaryOrangeHex,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default OrderItemCard;
