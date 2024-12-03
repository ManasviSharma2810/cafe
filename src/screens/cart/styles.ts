import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

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
      ItemContainer: {
        flex: 1,
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
        marginTop: 25,
      },
})