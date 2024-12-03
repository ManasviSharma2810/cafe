import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import { useNavigation } from '@react-navigation/native';
interface HeaderBarProps {
  title?: string;
}
const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon name="menu" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Profile')
      }}>
      <ProfilePic />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_32,
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
export default HeaderBar;
