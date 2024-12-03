import {Dimensions, StyleSheet,} from 'react-native'
import { COLORS } from '../../theme/theme';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
      },
      image: {
        width: width * 0.9,
        height: height * 0.6,
        resizeMode: 'contain',
        marginVertical: 20,
        top: "10%",
      },
      title: {
        color: COLORS.primaryOrangeHex,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 20,
      },
      description: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 40,
      },
      dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'grey',
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor: COLORS.primaryOrangeHex,
      },
      nextButton: {
        width: '80%',
        backgroundColor: COLORS.primaryOrangeHex,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20,
      },
      nextButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
      },
})