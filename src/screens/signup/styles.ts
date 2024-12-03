import {StyleSheet} from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primaryBlackHex,
      },
      header: {
        left: 20,
        marginBottom: SPACING.space_20,
      },
      title: {
        color: COLORS.primaryOrangeHex,
        fontSize: 40,
        fontFamily: FONTFAMILY.poppins_semibold,
      },
      inputContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: BORDERRADIUS.radius_15,
        padding: 3,
        marginVertical: SPACING.space_10,
        marginHorizontal: SPACING.space_15,
        borderWidth: 1,
        borderColor: COLORS.primaryOrangeHex,
        height: 50,
      },
      textInput: {
        color: COLORS.primaryWhiteHex,
        top: 5,
        fontSize: 16,
        padding: 9,
        fontFamily: FONTFAMILY.poppins_regular,
      },
      button: {
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: BORDERRADIUS.radius_15 * 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_20,
        marginHorizontal: SPACING.space_15,
      },
      buttonText: {
        color: COLORS.primaryBlackHex,
        fontSize: FONTSIZE.size_18,
        fontWeight: 'bold',
      },
      forgotText: {
        color: COLORS.primaryOrangeHex,
        textAlign: 'center',
        padding: 5,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.poppins_medium,
      },
      createStyle: {
        margin: 18,
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 1,
        borderRadius: BORDERRADIUS.radius_15 * 2,
        padding: 10,
      },
      toggleEye: {
        position: 'absolute',
        right: 0,
        padding: 12,
      },
})