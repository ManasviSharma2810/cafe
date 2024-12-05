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
      headerText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
        marginTop: 20,
      },
      emptyView: {
        height:SPACING.space_36,
        width: SPACING.space_36,
      },
      arrowStyle: {
        marginTop: 25,
      },
      headerContainer: {
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_32,
    
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      popup: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      popupText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex,
      },
})