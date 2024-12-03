import {StyleSheet} from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme'
export const styles = StyleSheet.create({
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
      itemContainer: {
        flex: 1,
      },
      lottieAnimationContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: COLORS.secondaryBlackRGBA,
        justifyContent: 'center',
        alignItems: 'center',
      },
      DownloadButton: {
        margin: SPACING.space_20,
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_40,
        borderRadius: BORDERRADIUS.radius_15,
      },
      ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
      },
})