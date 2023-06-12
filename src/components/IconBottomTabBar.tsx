import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
type IconBottomTabBarProps = {
  icon: ImageSourcePropType;
  label: string;
  color: string;
};
const IconBottomTabBar = ({
  color,
  icon,
  label,
}: IconBottomTabBarProps): React.JSX.Element => {
  return (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        style={[styles.iconTab, {tintColor: color}]}
        source={icon}
      />
      <Text style={[styles.label, {color: color}]}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  iconTab: {
    width: 20,
    height: 20,
  },
  label: {
    marginTop: 3,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: -0.17,
  },
});
export default IconBottomTabBar;
