import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoadingModal from './src/components/modal/LoadingModal';
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
        <LoadingModal />
      </Provider>
    </>

  );
}
export default App;
