import React from 'react';
import {SafeAreaView, StyleSheet, Text,View} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux_store/redux_store'
import { Provider } from 'react-redux';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View style={{flex:1}}>
     <RootNavigation/>
    </View>
    </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
