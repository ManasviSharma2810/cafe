import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {
  COLORS,
  FONTSIZE,
} from '../../theme/theme';
import {useStore} from '../../store/store';
import CoffeeData from '../../data/CoffeeData';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../../components/HeaderBar';
import CustomIcon from '../../components/CustomIcon';
import CoffeeCard from '../../components/CoffeeCard';
import { styles } from './styles';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};
const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
};
const HomeScreen = ({navigation}: any) => {
  // const navigation = useNavigation();
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  console.log(CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  }); // will show the active index
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  ); // whenever we choose category it show the sorted coffee
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();
  console.log('categories=', sortedCoffee.length);

  const ListRef: any = useRef<FlatList>();
  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };
  const coffeeCartAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    navigation.navigate('Cart');
    
  };
  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <HeaderBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <Text style={styles.screenTitle}>
          Find the best{'\n'}coffee for you
        </Text>
        <View style={styles.inputContainerComponent}>
          <CustomIcon
            style={styles.inputIcon}
            name="search"
            size={FONTSIZE.size_18}
            color={
              searchText.length > 0
                ? COLORS.primaryOrangeHex
                : COLORS.primaryLightGreyHex
            }
          />
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInputContainer}
          />
          {searchText.length > 0 ? (
            <View style={styles.inputIconClose}>
              <TouchableOpacity
                onPress={() => {
                  resetSearchCoffee();
                }}>
                <CustomIcon
                  name={'close'}
                  size={FONTSIZE.size_16}
                  color={COLORS.primaryLightGreyHex}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.categoryScrollViewContainer}>
              <TouchableOpacity
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    Animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}
                style={styles.categoryScrollViewItem}>
                <Text
                  style={[
                    styles.categoriesText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.activeCategories} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Text style={styles.categoriesText}>No Coffee Found...</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailScreen', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  type={item.type}
                  buttonPressHandler={
                    coffeeCartAddToCart
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.coffeeBeanText}>Coffee beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            styles.flatListContainer,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailScreen', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  roasted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  type={item.type}
                  buttonPressHandler={
                    coffeeCartAddToCart
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


