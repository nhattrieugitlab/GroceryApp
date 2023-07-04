import {StyleSheet} from 'react-native';
export const logInTextInputStyles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    marginTop: 13,
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    height: '100%',
    width: '100%',
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#FF5E00',
  },
  erroText: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: '400',
    color: 'red',
  },
});
