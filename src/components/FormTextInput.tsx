import {View, TextInput, StyleSheet, Text, ViewStyle} from 'react-native';
import {useState} from 'react';
import {max} from 'react-native-reanimated';
type FormTextInputProps = {
  style?: ViewStyle;
  label: string;
  disable?: boolean;
  type?: 'number-pad';
  err: boolean;
  value: string;
  maxLength?: number;
  errMessage?: string;
  placeHolder: string;
  onChangeText?: Function;
};
const FormTextInput: React.FC<FormTextInputProps> = ({
  style,
  maxLength,
  placeHolder,
  label,
  errMessage,
  onChangeText,
  err,
  value,
  disable,
  type,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={!disable}
        maxLength={maxLength}
        value={value}
        keyboardType={type || 'default'}
        onChangeText={(text: string) => {
          onChangeText && onChangeText(text);
        }}
        style={[
          styles.textInput,
          err && {borderBottomColor: 'red', borderBottomWidth: 1},
        ]}
        placeholderTextColor={'#9B9B9B'}
        placeholder={placeHolder}
      />
      {err && <Text style={styles.errText}>{errMessage}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  errText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'red',
  },
  label: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    marginBottom: 10,
    color: '#6D3805',
  },
  textInput: {
    fontWeight: '400',
    color: 'black',
    fontSize: 16,
    lineHeight: 19.2,
    width: '99%',
    alignSelf: 'center',
    height: 64,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 1,
    paddingHorizontal: 25,
  },
  container: {
    marginVertical: 10,
    justifyContent: 'center',
  },
});
export default FormTextInput;
