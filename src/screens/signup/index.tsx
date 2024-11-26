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

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {icons} from '../../assets/icons';

const SignUP = ({navigation}: any) => {
  return (
    <LinearGradient
      colors={[COLORS.primaryBlackHex,COLORS.primaryOrangeHex]}
      style={styles.container}>
      <View style={styles.header}>
        {/* <Image style={styles.cup2style} source={icons.cup2}/> */}
        <Text  style={styles.title}>Welcome {'\n'} Back!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryLightGreyHex}
          secureTextEntry
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('TabNavigator');
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.createStyle}>
        <Text style={styles.forgotText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot your password ?</Text>
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
    left: 20,
    marginBottom: SPACING.space_20,
  },
  title: {
    color: COLORS.primaryDarkGreyHex,
    fontSize: 40,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  subtitle: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_light,
    textAlign: 'center',
    marginTop: SPACING.space_10,
  },
  inputContainer: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: BORDERRADIUS.radius_15,
    padding: SPACING.space_18,
    marginVertical: SPACING.space_10,
    marginHorizontal: SPACING.space_15,
    height: 50,
  },
  textInput: {
    color: COLORS.primaryWhiteHex,
    fontSize: 16,
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
    color: COLORS.primaryBlackHex,
    textAlign: 'center',
    padding: 5,
    // marginTop: SPACING.space_15,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  createStyle: {
    margin: 18,
    borderColor:COLORS.primaryBlackHex,
    borderWidth: 1,
    // backgroundColor: 'red',
    borderRadius: BORDERRADIUS.radius_15 * 2,
    padding: 10,
  },
  cup2style:{
    left:"15%",
    marginBottom:30,
    // height:"20%",
    // width:"20%"
  }
  
  
});

export default SignUP;
