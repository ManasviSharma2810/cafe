import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {images} from '../../assets/images';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import GradientBGIcon from '../../components/GradientBGIcon';
import auth from '@react-native-firebase/auth';
import {setLogout} from '../../redux_store/appSlice';
import {useDispatch} from 'react-redux';
import { styles } from './styles';


const ProfileScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setEmail(user.email || '');
    }
  }, []);

  const cardData = [
    {
      id: '1',
      text: 'Order History',
      onPress: () => navigation.navigate('History'),
    },
    {id: '2', text: 'Favorites', onPress: () => navigation.navigate('Fav')},
    {id: '3', text: 'Your Cart', onPress: () => navigation.navigate('Cart')},
    {
      id: '4',
      text: 'Payment Methods',
      onPress: () => navigation.navigate('PaymentScreen'),
    },
  ];

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.arrowStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <GradientBGIcon
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.emptyView} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={images.profileImage} style={styles.profilePicture} />
          <Text style={styles.username}>{email || 'User'}</Text>
        </View>
        <View style={styles.section}>
          {cardData.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={item.onPress}>
              <Text style={styles.cardText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.rewards}>
          <Text style={styles.rewardsText}>Rewards: 120 Points</Text>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            dispatch(setLogout());
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;