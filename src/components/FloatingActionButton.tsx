import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

const FloatingActionButton: React.FC<{
  style: ViewStyle;
  icon: ImageSourcePropType;
}> = ({style, icon}) => {
  return (
    <TouchableOpacity style={[style, styles.container]}>
      <Image
        style={{tintColor: 'white', height: 15, width: 15}}
        source={icon}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    elevation: 5,
  },
});
export default FloatingActionButton;
