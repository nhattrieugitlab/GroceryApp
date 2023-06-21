import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
type ButtonProp = {
  onPress: Function;
  backGroundColor?: string; //undifine
  label: string;
  textColor?: string;
  borderColor?: string;
  style?: ViewStyle;
};
const Button: React.FC<ButtonProp> = ({
  label,
  onPress,
  backGroundColor,
  textColor,
  borderColor,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[
        ButtonStyle.container,
        {backgroundColor: backGroundColor || '#FF5E00'},
        borderColor != undefined && {borderColor: borderColor, borderWidth: 1},
        style,
      ]}>
      <Text style={[ButtonStyle.buttonLabel, {color: textColor || 'white'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ButtonStyle = StyleSheet.create({
  container: {
    marginTop: 17,
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
export default Button;
