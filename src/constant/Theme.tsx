import {DefaultTheme} from '@react-navigation/native';
export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
    primary: 'blue',
  },
};
