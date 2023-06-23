import {
  StyleSheet,
  Text,
  Image,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {AppIcons} from '../constant/IconPath';
type TabBarProps = {
  onBackPress?: Function;
  showBackButton?: boolean;
  label: string;
  style?: ViewStyle;
};
const TabBar: React.FC<TabBarProps> = ({
  label,
  style,
  showBackButton,
  onBackPress,
}) => {
  return (
    <View style={[styles.container, style && style]}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => {
            onBackPress && onBackPress();
          }}
          style={styles.btnBackContainer}>
          <Image style={styles.img} source={AppIcons.IconBack} />
        </TouchableOpacity>
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  btnBackContainer: {
    position: 'absolute',
    left: 0,
    top: 14,
    width: 16.88,
    height: 22,
    marginRight: 10,
  },
  img: {
    width: 16.88,
    height: 22,
    tintColor: '#FF5E00',
  },
  label: {
    textAlign: 'center',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    fontFamily: 'Klarna Text',
    fontSize: 24,
    fontWeight: '700',
  },
  container: {
    padding: 2,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default TabBar;
