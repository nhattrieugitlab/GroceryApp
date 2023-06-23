import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;
