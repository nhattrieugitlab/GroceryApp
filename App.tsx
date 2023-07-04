import React, { useEffect } from 'react';
import AppNavigator from './src/routes/AppNavigator';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LoadingModal from './src/components/modal/LoadingModal';
function App(): JSX.Element {
  // GoogleSignin.configure({
  //   webClientId: '196151476447-2hjfrc9jahkpevgag6d1vipuja1o3caj.apps.googleusercontent.com'
  // });

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
