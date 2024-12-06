import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";
import { responsiveHeight } from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
      header: {
        alignItems: 'center',
        top: 15,
        paddingVertical: 30,
        backgroundColor: '#000',
      },
      profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
      },
      username: {
        fontSize: 24,
        color: '#fff',
        marginTop: 10,
        fontWeight: 'bold',
      },
      editText: {
        color: COLORS.primaryOrangeHex,
        fontSize: 16,
      },
      section: {
        marginTop: responsiveHeight(2),
        paddingHorizontal: 20,
      },
      card: {
        backgroundColor: '#1c1c1e',
        padding: 15,
        borderRadius: 10,
        marginBottom: responsiveHeight(1.5),
        flexDirection: 'row',
        alignItems: 'center',
      },
      cardText: {
        color: '#fff',
        fontSize: 18,
        flex: 1,
      },
      rewards: {
        marginTop: responsiveHeight(2),
        paddingHorizontal: 20,
      },
      rewardsText: {
        fontSize: 18,
        color: COLORS.primaryOrangeHex,
        fontWeight: 'bold',
      },
      logoutButton: {
        marginTop: responsiveHeight(4),
        padding: 15,
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
      },
      logoutText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: FONTFAMILY.poppins_medium,
      },
      headerText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
        marginTop: responsiveHeight(3),
      },
      emptyView: {
        height: SPACING.space_36,
        width: SPACING.space_36,
      },
      arrowStyle: {
        marginTop: responsiveHeight(2),
      },
      headerContainer: {
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_32,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      scrollContent: {
        paddingBottom: responsiveHeight(15), 
      },
})