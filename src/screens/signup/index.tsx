import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {COLORS} from '../../theme/theme';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {setLogin} from '../../redux_store/appSlice';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const SignUP = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('Logged in user:', user);
      dispatch(setLogin());
      navigation.replace('TabNavigator');
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Something went wrong.';

      if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError).code ===
        'auth/invalid-email'
      ) {
        errorMessage = 'Invalid email format.';
      } else if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError).code ===
        'auth/user-not-found'
      ) {
        errorMessage = 'User not found. Please check your email.';
      } else if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError).code ===
        'auth/wrong-password'
      ) {
        errorMessage = 'Incorrect password. Please try again.';
      }
      Alert.alert('Login Error', errorMessage);
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailValid(validateEmail(text)); 
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsPasswordValid(validatePassword(text)); 
  };

  const isButtonDisabled = !(isEmailValid && isPasswordValid);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LinearGradient
      start={{x: 1, y: 1}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={[COLORS.primaryBlackHex, COLORS.primaryGreyHex]}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome {'\n'} Back!</Text>
      </View>

      <View
        style={[
          styles.inputContainer,
          email !== '' && !validateEmail(email)
            ? {borderColor: 'red'}
            : {borderColor: COLORS.primaryOrangeHex},
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="white"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {!isEmailValid && email !== '' && (
        <Text style={styles.errorText}>Invalid email format.</Text>
      )}

      <View
        style={[
          styles.inputContainer,
          password !== '' && password.length < 6
            ? {borderColor: 'red'}
            : {borderColor: COLORS.primaryOrangeHex},
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={COLORS.primaryWhiteHex}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity style={styles.toggleEye} onPress={togglePassword}>
          {showPassword ? (
            <Icon
              name="visibility-off"
              size={25}
              color={COLORS.primaryOrangeHex}
            />
          ) : (
            <Icon name="visibility" size={25} color={COLORS.primaryOrangeHex} />
          )}
        </TouchableOpacity>
      </View>
      {!isPasswordValid && password !== '' && (
        <Text style={styles.errorText}>
          Password must be at least 6 characters.
        </Text>
      )}

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && {opacity: 0.6}]}
        onPress={handleLogin}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}>
        <Text style={styles.forgotText}>Create an Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SignUP;
