import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
type FloatingActionButtonProps = {
  style?: ViewStyle;
  icon: ImageSourcePropType;
  onPress: Function;
};
const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  style,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[style, styles.container]}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {tintColor: 'white', height: 15, width: 15},
  container: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    elevation: 5,
    borderRadius: 24,
    backgroundColor: '#FF5E00',
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
});
export default FloatingActionButton;
