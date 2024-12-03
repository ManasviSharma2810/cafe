import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";

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
})