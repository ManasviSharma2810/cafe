import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
// import {icons} from '../../assets/icons';
import CustomIcon from '../../components/CustomIcon';

const SignUP = ({navigation}: any) => {
  // const navigation = useNavigation();

  return (
    <LinearGradient colors={[COLORS.primaryBlackHex,COLORS.primaryOrangeHex]} style={styles.container}>
      <View style={styles.header}>
        {/* <Image style={styles.iconStyleCup} source={icons.cup} /> */}
      </View>

   

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('TabNavigator');
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    height: '10%',
  },
  title: {
    color: COLORS.primaryWhiteHex,
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_light,
    textAlign: 'center',
    // marginBottom:SPACING.space_10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_15,
    paddingHorizontal: SPACING.space_18,
    marginVertical: 10,
    marginHorizontal: SPACING.space_15,
    height: 50,
  },
  iconStyle: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.primaryWhiteHex,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: SPACING.space_15,
  },
  buttonText: {
    color: COLORS.primaryBlackHex,
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: COLORS.primaryWhiteHex,
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  iconStyleCup: {
    height: '60%',
    width: '50%',
    resizeMode: 'contain',

    marginVertical: SPACING.space_10,
  },
});

export default SignUP;
