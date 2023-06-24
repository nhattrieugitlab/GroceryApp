import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {cardStyle} from './CardStyle';
import {AppIcons} from '../../constant/IconPath';

const ShowItemCard: React.FC<{onPress: Function}> = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[cardStyle.container, styles.container]}>
      <View style={styles.labelContainer}>
        <Image
          resizeMode="center"
          style={styles.iconCart2}
          source={AppIcons.IconCart2}
        />
        <Text style={[cardStyle.titleText, {marginLeft: 10}]}>See Items</Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.iconCart2, {height: 22, width: 14}]}
        source={AppIcons.IconArrowToRight}
      />
    </TouchableOpacity>
  );
};
export default ShowItemCard;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart2: {
    width: 35,
    height: 25,
  },
});
