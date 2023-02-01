import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/home/Home';
import LoginScreen from './src/scenes/LoginScreen';
import { Provider } from 'react-redux';
import { persistedStore, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();
// PRODUCT: 'napi/topics/nature/photos',
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};

export default App;
