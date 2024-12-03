import { StyleSheet } from "react-native";
import { myColor } from "../../utils/myColors";
import { COLORS, FONTFAMILY, FONTSIZE } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primaryOrangeHex
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
      textStyle: {
        // marginTop: 1,
        color:myColor.primary,
        fontStyle: 'italic',
      },
      subtitle: {
        color: COLORS.primaryBlackHex,
        fontSize: FONTSIZE.size_28,
        // fontFamily:FONTFAMILY.poppins_medium,
        textAlign:'center',
         fontStyle: 'italic'
        // marginBottom:SPACING.space_10
      },
      lottieStyle: {
        height: 150,
      },
})
