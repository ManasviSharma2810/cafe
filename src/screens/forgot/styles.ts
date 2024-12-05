import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from "../../theme/theme";

export const styles= StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backArrowContainer: {
        position: 'absolute',
        top: 90, 
        left: 40, 
        borderWidth:2,
        borderColor:COLORS.primaryOrangeHex,
        borderRadius:10,
        padding:1
      },
      backArrow: {
        width: 30,
        height: 30, 
        tintColor: COLORS.primaryOrangeHex, 
      },
      title: {
        color: COLORS.primaryOrangeHex,
        fontSize: 35,
        fontFamily: FONTFAMILY.poppins_light,
        margin: 20,
      },
      input: {
        width: '80%',
        backgroundColor: COLORS.primaryBlackHex,
        color: '#fff',
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 20,
        borderRadius: BORDERRADIUS.radius_15,
      },
      resetButton: {
        width: '80%',
        backgroundColor: COLORS.primaryOrangeHex,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_15 * 2,
      },
      resetButtonText: {
        color: COLORS.primaryBlackHex,
        fontSize: FONTSIZE.size_18,
        fontWeight: 'bold',
      },
      container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
})