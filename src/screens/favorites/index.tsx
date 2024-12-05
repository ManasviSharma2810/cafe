import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useStore} from '../../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTSIZE} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import FavoritesItemCard from '../../components/FavoritesItemCard';
import { styles } from './styles';
import GradientBGIcon from '../../components/GradientBGIcon';
import CustomPopupModal from '../../components/CustomPopupModal';
const FavoritesScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  // const tabBarHeight = useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavorite = useStore((state: any) => state.deleteFromFavorite);
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalMessage, setModalMessage] = useState(''); 
  const ToggleFavorite = (favourite: boolean, type: string, id: string) => {
    if (favourite) {
      deleteFromFavorite(type, id);
      setModalMessage('Removed from Favorites');
    } else {
      addToFavoriteList(type, id);
      setModalMessage('Added to Favorites');
    }
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };
  let tabBarHeight = 0; 
  try {
    tabBarHeight = useBottomTabBarHeight();
  } catch (error) {
    console.warn('Screen is not inside a BottomTabNavigator.');
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <GradientBGIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Favourites</Text>
        <View style={styles.emptyView} />
        </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
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
      <CustomPopupModal
        visible={modalVisible}
        message={modalMessage}
      />
    </View>
  );
};

export default FavoritesScreen;


