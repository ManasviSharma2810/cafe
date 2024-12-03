import{StyleSheet} from "react-native"
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme"
export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
      },
      lottieAnimationContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor:COLORS.secondaryBlackRGBA ,
        justifyContent: 'center',
        alignItems: 'center',
      },
      lottieAnimation: {
        flex: 1,
      },
      scrollViewFlex: {
        flexGrow: 1,
      },
      headerContainer: {
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_32,
    
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      headerText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
        marginTop: 20,
      },
      emptyView: {
        height: SPACING.space_36,
        width: SPACING.space_36,
      },
      arrowStyle: {
        marginTop: 15,
      },
      paymentOptionContainer: {
        gap: SPACING.space_15,
        padding: SPACING.space_15,
      },
      creditCardContainer: {
        padding: SPACING.space_2,
        gap: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_15,
        borderWidth: 2,
      },
      creditCardTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
        marginLeft: SPACING.space_10,
      },
      creditCardBG: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: BORDERRADIUS.radius_25,
      },
      linearGradientStyle: {
        borderRadius: BORDERRADIUS.radius_25,
        gap: SPACING.space_40,
        padding: SPACING.space_10,
      },
      creditCardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '5%',
      },
      creditCardNumberContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center',
      },
      creditCardNumber: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
        letterSpacing: SPACING.space_4 + SPACING.space_2,
      },
      creditCardNameSubtitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.bottomIconColor,
      },
      creditCardNameTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
      },
      creditCardNameContainer: {
        alignItems: 'flex-start',
      },
      creditCardDateContainer: {
        alignItems: 'flex-end',
        padding: 10,
        margin: 5,
      },
})