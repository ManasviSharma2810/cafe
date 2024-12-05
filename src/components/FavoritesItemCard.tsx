import React, { useState } from 'react';
import {ImageProps, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBGComponent from './ImageBGComponent';

interface FavoritesItemCardProps {
  id: string;
  imagelink_portrait: any;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavouriteItem,
}) => {
  const [fullDesc, setFullDesc] = useState(false);
  return (
    <View style={styles.cardContainer}>
      <ImageBGComponent
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        special_ingredient={special_ingredient}
        name={name}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavorite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.containerLG}>

        <Text style={styles.descriptionTitle}>Description</Text>
       
        <Text numberOfLines={3} style={styles.descriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  containerLG: {
    gap: SPACING.space_10,
    // padding:SPACING.space_20,
    marginBottom:30
  },
  descriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    paddingHorizontal: 10,
  },
  cardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
    marginHorizontal:20
  },
});
export default FavoritesItemCard;
