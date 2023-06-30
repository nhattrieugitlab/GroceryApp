import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </Provider>
      <View></View>
    </>

  );
}
export default App;
