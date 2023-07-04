/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Test from './src/views/Test';
// AppRegistry.registerComponent(appName, () => () => <Test />);
AppRegistry.registerComponent(appName, () => App);
