import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import formatCardNumber from '../utilities/FormatCreaditCardNumber';
type CreditCardProps = {
  type?: string;
  name?: string;
  onSelectCard: Function;
  cardNumber: string;
  exprityDate: string;
};
const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  exprityDate,
  name,
  onSelectCard,
  type,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onSelectCard();
      }}
      style={styles.container}>
      <ImageBackground
        imageStyle={{
          width: '100%',
          borderRadius: 18,
        }}
        resizeMode="contain"
        style={{ flex: 1 }}
        source={
          type
            ? require('../assets/images/br_creditcard.png')
            : require('../assets/images/br_card2.png')
        }>
        <Image
          style={{
            position: 'absolute',
            top: 34,
            left: 24,
            width: 32,
            height: 24,
          }}
          source={require('../assets/icon/ic_chip.png')}
        />
        <Text style={styles.cardNumber}>{formatCardNumber(cardNumber)}</Text>
        <CardInfo name={name || 'Anonymous'} exDate={exprityDate} />
      </ImageBackground>
    </TouchableOpacity>
  );
};
const CardInfo: React.FC<{ name: string; exDate: string }> = ({ name, exDate }) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        bottom: 20,
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={styles.cardInfoTitle}>Card Holder Name</Text>
        <Text style={styles.cardInfoText}>{name}</Text>
      </View>
      <View>
        <Text style={styles.cardInfoTitle}>Expiry Date</Text>
        <Text style={styles.cardInfoText}>{exDate}</Text>
      </View>
      <Image
        style={{
          width: 40,
          height: 30,
          alignSelf: 'center',
        }}
        resizeMode="contain"
        source={require('../assets/icon/ic_mt_card.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cardInfoTitle: {
    width: 100,
    fontSize: 10,
    lineHeight: 22,
    color: 'white',
    opacity: 80,
  },
  cardInfoText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  cardNumber: {
    fontSize: 27,
    color: 'white',
    lineHeight: 27,
    top: 88,
    left: 24,
    position: 'absolute',
  },
  container: {
    borderRadius: 18,
    elevation: 2,
    marginVertical: 20,
    width: '100%',
    height: 200,
  },
});
export default CreditCard;
