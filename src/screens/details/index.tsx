import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {useStore} from '../../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import ImageBGComponent from '../../components/ImageBGComponent';
import {TouchableOpacity} from 'react-native';
import PaymentFooter from '../../components/PaymentFooter';
import CartScreen from '../cart';
const DetailScreen = ({navigation, route}: any) => {
  console.log('route :', route);
  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavorite = useStore((state: any) => state.deleteFromFavorite);
  const BackHandler = () => {
    navigation.pop();
  };
  const addToCart = useStore((state: any) => state.addToCart);
  const  calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const [fullDesc, setFullDesc] = useState(false);
  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices : [{...price ,quantity :1}]
  });
  calculateCartPrice();
  navigation.navigate("Cart");
  };
  const ToggleFavorite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavorite(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <ImageBGComponent
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          special_ingredient={ItemOfIndex.special_ingredient}
          name={ItemOfIndex.name}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavorite={ToggleFavorite}
        />
        <View style={styles.footerInfoArea}>
          <Text style={styles.descriptionText}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(previous => !previous);
              }}>
              <Text style={styles.descText}>{ItemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(previous => !previous);
              }}>
              <Text numberOfLines={3} style={styles.descText}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.descriptionText}>Size</Text>
          <View style={styles.sizeOuterContainer}>
            {ItemOfIndex.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => {
                  setPrice(data);
                }}
                style={[
                  styles.sizeBox,
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        ItemOfIndex.type == 'bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : '#AEAEAE',
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonPressHandler={() => {
            addToCartHandler({
              id:ItemOfIndex.id,
              index : ItemOfIndex.index,
              name : ItemOfIndex.name,
              roasted:ItemOfIndex.roasted,
              imagelink_square :ItemOfIndex.imagelink_square,
              special_ingredient :ItemOfIndex.special_ingredient,
              type : ItemOfIndex.type,
              price: price
            })
          }}
        />
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
    justifyContent: 'space-between',
  },
  descriptionText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_10,
  },
  descText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  footerInfoArea: {
    padding: SPACING.space_20,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  sizeText: {
    // color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  sizeBox: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    flex: 1,
    borderRadius: BORDERRADIUS.radius_10,
    height: SPACING.space_24 * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
export default DetailScreen;
