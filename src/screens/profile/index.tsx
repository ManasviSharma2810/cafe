import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {images} from '../../assets/images';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import GradientBGIcon from '../../components/GradientBGIcon';
import auth from '@react-native-firebase/auth';  

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

  const renderCard = ({item}: any) => (
    <TouchableOpacity style={styles.card} onPress={item.onPress}>
      <Text style={styles.cardText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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

      <View style={styles.header}>
        <Image source={images.profileImage} style={styles.profilePicture} />
        <Text style={styles.username}>{email || 'User'}</Text>
        <TouchableOpacity style={styles.editButton}>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <FlatList
          data={cardData}
          renderItem={renderCard}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>

      <View style={styles.rewards}>
        <Text style={styles.rewardsText}>Rewards: 120 Points</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    alignItems: 'center',
    top: 15,
    paddingVertical: 30,
    backgroundColor: '#000',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 5,
    padding: 5,
  },
  editText: {
    color: COLORS.primaryOrangeHex,
    fontSize: 16,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#1c1c1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
  },
  rewards: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  rewardsText: {
    fontSize: 18,
    color: COLORS.primaryOrangeHex,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    marginTop: 20,
  },
  emptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  arrowStyle: {
    marginTop: 15,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
