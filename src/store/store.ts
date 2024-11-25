import {create} from 'zustand'; // create the store
import {produce} from 'immer'; // update the store foe deeply linked object
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem: any) =>
        set(
          produce(state => {
            let found = false;

            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id === cartItem.id) {
                // Corrected: === for equality check
                found = true;
                let sizeFound = false; // Corrected: renamed variable to be more descriptive
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (
                    state.CartList[i].prices[j].size === cartItem.prices[0].size
                  ) {
                    // Corrected: === for equality check
                    sizeFound = true;
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
                if (!sizeFound) {
                  // Corrected: changed to negation for clarity
                  state.CartList[i].prices.push(cartItem.prices[0]);
                }
                state.CartList[i].prices.sort((a: any, b: any) =>
                  a.size > b.size ? -1 : 1,
                ); // Corrected: sorting order to properly sort sizes
                break;
              }
            }
            if (!found) {
              // Corrected: changed to negation for clarity
              state.CartList.push(cartItem);
            }
          }),
        ),
      calculateCartPrice: () =>
        set(
          produce(state => {
            let totalPrice = 0;
            for (let i = 0; i < state.CartList.length; i++) {
              let tempPrice = 0;
              for (let j = 0; j < state.CartList[i].prices.length; j++) {
                tempPrice +=
                  parseFloat(state.CartList[i].prices[j].price) *
                  state.CartList[i].prices[j].quantity;
                // Corrected: Changed from `=` to `+=` to accumulate `tempPrice`
              }
              state.CartList[i].itemPrice = tempPrice.toFixed(2).toString();
              totalPrice += tempPrice; // Corrected: Fixed `totalPrice` calculation
            }
            state.CartPrice = totalPrice.toFixed(2).toString();
          }),
        ),
      addToFavoriteList: (type: string, id: string) =>
        set(
          produce(state => {
            const list = type === 'Coffee' ? state.CoffeeList : state.BeanList; // Corrected: fixed typo BeanListList to BeanList
            for (let i = 0; i < list.length; i++) {
              if (list[i].id === id) {
                // Corrected: === for equality check
                list[i].favourite = !list[i].favourite;
                if (list[i].favourite) {
                  state.FavoritesList.unshift(list[i]); // Corrected: directly adds to FavoritesList
                } else {
                  state.FavoritesList = state.FavoritesList.filter(
                    (item: any) => item.id !== id,
                  ); // Corrected: removes item if not favorite
                }
                break;
              }
            }
          }),
        ),
      deleteFromFavorite: (type: string, id: string) =>
        set(
          produce(state => {
            const list = type === 'Coffee' ? state.CoffeeList : state.BeanList;
            for (let i = 0; i < list.length; i++) {
              if (list[i].id === id) {
                list[i].favourite = !list[i].favourite;
                break;
              }
            }
            state.FavoritesList = state.FavoritesList.filter(
              (item: any) => item.id !== id,
            ); // Corrected: Filter out the unfavorited item
          }),
        ),
      incrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce(state => {
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id == id) {
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (state.CartList[i].prices[j].size == size) {
                    state.CartList[i].prices[j].quantity++;
                    break;
                  }
                }
              }
            }
          }),
        ),
      decrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce(state => {
            for (let i = 0; i < state.CartList.length; i++) {
              if (state.CartList[i].id == id) {
                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                  if (state.CartList[i].prices[j].size == size) {
                    if (state.CartList[i].prices.length > 1) {
                      if (state.CartList[i].prices[j].quantity > 1) {
                        state.CartList[i].prices[j].quantity--;
                      } else {
                        state.CartList[i].prices.splice(j, 1);
                      }
                    } else {
                      if (state.CartList[i].prices[j].quantity > 1) {
                        state.CartList[i].prices[j].quantity--;
                      } else {
                        state.CartList.splice(i, 1);
                      }
                    }
                    break;
                  }
                }
              }
            }
          }),
        ),
      addToOrderHistoryListFromCart: () =>
        set(
          produce(state => {
            let temp = state.CartList.reduce(
              (accumulate: number, currentValue: any) =>
                accumulate + parseFloat(currentValue.itemPrice),
              0,
            );
            if (state.OrderHistoryList.length > 0) {
              state.OrderHistoryList.unshift({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.CartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            } else {
              state.OrderHistoryList.push({
                OrderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                CartList: state.CartList,
                CartListPrice: temp.toFixed(2).toString(),
              });
            }
            state.CartList = [];
          }),
        ),
    }),
    {name: 'coffee-app', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

// produce from Immer allows updating the CartList immutably.
// Immer makes it easy to handle deeply nested state updates without
//needing to manually copy every level of the object structure.
