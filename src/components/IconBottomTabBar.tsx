import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
type IconBottomTabBarProps = {
  icon: ImageSourcePropType;
  label: string;
  color: string;
  amountCartItem?: number;
  cartTab: boolean;
};
const IconBottomTabBar = ({
  color,
  icon,
  label,
  cartTab,
  amountCartItem,
}: IconBottomTabBarProps): React.JSX.Element => {
  const itemCount = amountCartItem || 0;
  const isShowCountItems = cartTab && itemCount > 0;
  return (
    <View style={styles.iconContainer}>
      <Image
        resizeMode="contain"
        style={[styles.iconTab, {tintColor: color}]}
        source={icon}
      />
      {isShowCountItems && (
        <View
          style={{
            right: -5,
            top: -5,
            borderRadius: 8.5,
            width: 17,
            justifyContent: 'center',
            alignItems: 'center',
            height: 17,
            position: 'absolute',
            backgroundColor: 'red',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              fontWeight: '400',
            }}>
            {amountCartItem && amountCartItem >= 10
              ? '9+'
              : amountCartItem + ''}
          </Text>
        </View>
      )}
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
