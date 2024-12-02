import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';
import { images } from '../../assets/images';

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
    <View style={styles.overlay}>
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
        style={[styles.resetButton, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handlePasswordReset}
      >
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
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
    padding:5
  },
  backArrow: {
    width: 30,
    height: 30, 
    tintColor: COLORS.primaryOrangeHex, 
  },
  title: {
    color: COLORS.primaryOrangeHex,
    fontSize: 35,
    fontFamily: FONTFAMILY.poppins_semibold,
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
});
