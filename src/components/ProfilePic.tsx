import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '../assets/images';
import {COLORS, SPACING} from '../theme/theme';
const ProfilePic = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={images.profileImage} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
export default ProfilePic;
