import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

import {COLORS} from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {images} from '../../assets/images';
const CreateAccount = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const isEmailValid = validateEmail(text);
    const isPasswordValid = validatePassword(password);
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(text);
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleCreateAccount = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('Account created for user:', userCredential.user);
      navigation.navigate('SignUp');
    } catch (err: any) {
      console.error('Account creation error:', err);
    }
  };

  return (
    <LinearGradient
      start={{x: 1, y: 1}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={[COLORS.primaryBlackHex, COLORS.primaryGreyHex]}>
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}>
        <Image source={images.backArrow} style={styles.backArrow} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Create{'\n'}Account</Text>
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
          placeholderTextColor={COLORS.primaryWhiteHex}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {email !== '' && !validateEmail(email) && (
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
      {password !== '' && password.length < 6 && (
        <Text style={styles.errorText}>
          Password must be at least 6 characters.
        </Text>
      )}

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && {opacity: 0.6}]}
        onPress={handleCreateAccount}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.forgotText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default CreateAccount;
