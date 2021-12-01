import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {InputBox} from './components/InputBox';
import Items from './components/ItemList';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Items />
        <InputBox />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
