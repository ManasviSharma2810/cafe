import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateAccount = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    validateFields();
  }, [email, password]);

  const validateFields = () => {
    let emailValid = validateEmail(email);
    let passwordValid = password.length >= 6;

    setIsButtonDisabled(!(emailValid && passwordValid));
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
      colors={[COLORS.primaryBlackHex, COLORS.primaryBlackHex]}
      style={styles.container}>
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
          onChangeText={text => setEmail(text)}
        />
      </View>
      {email !== '' && !validateEmail(email) ? (
        <Text style={styles.errorText}>Invalid email format.</Text>
      ) : null}

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
          onChangeText={text => setPassword(text)}
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
      {password !== '' && password.length < 6 ? (
        <Text style={styles.errorText}>
          Password must be at least 6 characters.
        </Text>
      ) : null}
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

const styles = StyleSheet.create({
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
    borderColor: COLORS.primaryBlackHex,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    padding: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: SPACING.space_10,
  },
  toggleEye: {
    position: 'absolute',
    right: 0,
    padding: 12,
  },
});

export default CreateAccount;
