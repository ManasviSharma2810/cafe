import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';

interface CartItemsProps {
  id: string;
  name: string;
  imagelink_square: any;
  special_ingredient: string;
  roasted: string;
  prices: any;
  type: string;
  incrementCartItemQuantityHandler: any;
  decrementCartItemQuantityHandler: any;
}
const CartItems: React.FC<CartItemsProps> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  console.log(id, name, imagelink_square, special_ingredient, roasted);

  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemsLG}>
          <View style={styles.cartItemRow}>
            <Image source={imagelink_square} style={styles.cartItemImage} />
            <View style={styles.cartItemInfo}>
              <View>
                <Text style={styles.cartItemTitle}>{name}</Text>
                <Text style={styles.subTitle}>{special_ingredient}</Text>
              </View>
              <View style={styles.cartItemRoastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((data: any, index: any) => (
            <View
              key={index.toString()}
              style={styles.cartItemSizeRowContainer}>
              <View style={styles.cartItemSizeValueContainer}>
                <View style={styles.sizeBox}>
                  <Text
                    style={[
                      styles.sizeText,
                      {
                        fontSize:
                          type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </View>
                <Text style={styles.sizeCurrency}>
                  {data.currency}
                  <Text style={styles.sizePrice}> {data.price}</Text>
                </Text>
              </View>
              <View style={styles.cartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.cartItemIcon}
                  onPress={() => {
                    decrementCartItemQuantityHandler(id, data.size);
                  }}>
                  <CustomIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
                <View style={styles.cartItemQuantityContainer}>
                  <Text style={styles.cartItemQuantityText}>
                    {data.quantity}
                  </Text>
                </View>
                <View style={styles.cartItemSizeValueContainer}>
                  <TouchableOpacity
                    style={styles.cartItemIcon}
                    onPress={() => {
                      incrementCartItemQuantityHandler(id, data.size);
                    }}>
                    <CustomIcon
                      name="add"
                      color={COLORS.primaryWhiteHex}
                      size={FONTSIZE.size_10}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemSingleLinearGradient}>
          <View style={styles.cartItemRow}>
            <Image
              source={imagelink_square}
              style={styles.cartItemSingleImage}
            />
          </View>
          <View style={styles.cartItemSingleInfoContainer}>
            <View>
              <Text style={styles.cartItemTitle}>{name}</Text>
              <Text style={styles.subTitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.cartContainerSingleSizeValue}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.sizeCurrency}>
                {prices[0].currency}
                <Text style={styles.sizePrice}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.cartItemSizeValueContainer}>
              <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() => {
                  decrementCartItemQuantityHandler(id, prices[0].size);
                }}>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={styles.cartItemQuantityContainer}>
                <Text style={styles.cartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <View style={styles.cartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.cartItemIcon}
                  onPress={() => {
                    incrementCartItemQuantityHandler(id, prices[0].size);
                  }}>
                  <CustomIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={FONTSIZE.size_10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cartItemsLG: {
    flex: 1,
    margin: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemRow: {
    padding: SPACING.space_12,
    flexDirection: 'row',
    flex: 1,
    gap: SPACING.space_12,
  },
  cartItemImage: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    borderRadius:15,
    resizeMode: 'cover',
  },
  cartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
  },
  cartItemTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  subTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
    padding:8
  },
  cartItemRoastedContainer: {
    // height: responsiveHeight(1),
    // width: responsiveWidth(20),
    marginBottom:responsiveHeight(1),
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGreyHex,
  },
  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  cartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartItemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_15,
    justifyContent: 'space-between',
  },
  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  sizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  cartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
  },
  cartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: responsiveWidth(20),
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  cartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  cartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    // padding:SPACING.space_10,
    // gap: SPACING.space_,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemSingleImage: {
    height: responsiveHeight(15),
    width: responsiveWidth(34),
    borderRadius: BORDERRADIUS.radius_20,
  },
  cartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    right: '10%',
    padding: '2%',
    // justifyContent: 'space-around',
  },
  cartContainerSingleSizeValue: {
    flexDirection: 'row',
   
    alignItems: 'center',
  },
});
export default CartItems;
