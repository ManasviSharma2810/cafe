import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

export const styles = StyleSheet.create({
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
  descContainer: {
    overflow: 'hidden', 
    marginVertical: 10,     
  },
});
