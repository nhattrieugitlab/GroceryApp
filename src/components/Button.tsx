import {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
type ButtonProp = {
  onPress: Function;
  backGroundColor?: string; //undifine
  label: string;
  textColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  disable?: boolean;
};
// pháp test commit
const Button: React.FC<ButtonProp> = ({
  label,
  disable,
  onPress,
  backGroundColor,
  textColor,
  borderColor,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={() => {
        onPress();
      }}
      style={[
        ButtonStyle.container,
        {backgroundColor: backGroundColor || '#FF5E00'},
        borderColor != undefined && {borderColor: borderColor, borderWidth: 1},
        style,
        disable && {backgroundColor: '#e4e4e3'},
      ]}>
      <Text style={[ButtonStyle.buttonLabel, {color: textColor || 'white'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ButtonStyle = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#FF5E00',
  },
  buttonLabel: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
  },
});
export default memo(Button);
