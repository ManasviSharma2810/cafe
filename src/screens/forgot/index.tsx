import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { images } from '../../assets/images';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../theme/theme';

const ForgotPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('Password reset error:', error);
      Alert.alert('Error', 'Unable to send password reset email. Please try again later.');
    }
  };
  const isButtonDisabled = !email.trim();
  return (
    <LinearGradient
    start={{x: 1, y: 1}}
      end={{x: 0, y: 1}} style={styles.container}
      colors={[COLORS.primaryBlackHex,COLORS.primaryGreyHex]}
      >
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}
      >
      <Image source={images.backArrow} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="white"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity
        style={[styles.resetButton,isButtonDisabled && { opacity: 0.6 }]}
        onPress={handlePasswordReset}
      >
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ForgotPassword;


