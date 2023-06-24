import {View, StyleSheet, ImageSourcePropType, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DeliveryCard: React.FC<{
  time: string;
  name: string;
  img: ImageSourcePropType;
  setDelivery: Function;
  isSelected: boolean;
}> = ({isSelected, time, img, setDelivery, name}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setDelivery(name);
      }}
      style={[
        styles.container,
        isSelected && {borderColor: '#FF5E00', borderWidth: 1},
      ]}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{time}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 65,
    height: 20,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#F9F9F9',
    margin: 10,
    borderRadius: 10,
    width: 120,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
});
export default DeliveryCard;
