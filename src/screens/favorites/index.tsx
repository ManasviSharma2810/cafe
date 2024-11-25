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
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import CartItems from '../../components/CartItems';
import PaymentFooter from '../../components/PaymentFooter';
import FavoritesItemCard from '../../components/FavoritesItemCard';
const FavoritesScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavorite = useStore((state: any) => state.deleteFromFavorite);
  const ToggleFavorite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavorite(type, id) : addToFavoriteList(type, id);
  };
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <HeaderBar title="Favourites" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            {/* <HeaderBar title="Cart" /> */}

            {FavoritesList.length === 0 ? (
              <EmptyListAnimation title={'No Favourites'} />
            ) : (
              <View>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => {
                      navigation.push('DetailScreen', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}>
                    <FavoritesItemCard
                      id={data.id}
                      imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      type={data.type}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favourite={data.favourite}
                      ToggleFavouriteItem={ToggleFavorite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
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
  // listItemContainer: {
  //   paddingHorizontal: SPACING.space_20,
  //   gap: SPACING.space_20,
  // },
});
export default FavoritesScreen;
