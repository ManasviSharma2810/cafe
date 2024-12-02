import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';  
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const SignUP = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword,setShowPassword] = useState(true);

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      navigation.replace('TabNavigator');
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Something went wrong.';
    
      if ((error as FirebaseAuthTypes.NativeFirebaseAuthError).code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format.';
      } else if ((error as FirebaseAuthTypes.NativeFirebaseAuthError).code === 'auth/user-not-found') {
        errorMessage = 'User not found. Please check your email.';
      } else if ((error as FirebaseAuthTypes.NativeFirebaseAuthError).code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      }
      Alert.alert('Login Error', errorMessage);
    }
  };

  const isButtonDisabled = !email.trim() || !password.trim();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome {'\n'} Back!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryWhiteHex}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.toggleEye} onPress={togglePassword}>
          {showPassword ? (
            <Icon name="visibility-off" size={25} color={COLORS.primaryOrangeHex} />
          ) : (
            <Icon name="visibility" size={25} color={COLORS.primaryOrangeHex} />
          )}
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}>
        <Text style={styles.forgotText}>Create an Account</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   backgroundColor: COLORS.primaryBlackHex
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
});

export default SignUP;
