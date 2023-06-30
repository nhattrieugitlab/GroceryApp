import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cardStyle } from './CardStyle';
import { AppIcons } from '../../constant/IconPath';
import React from 'react';
import formatCardNumber from '../../utilities/FormatCreaditCardNumber';
type PaymentMethodCardProps = {
  cardNumber?: any;
  cashOnDelivery: boolean;
  onPress: Function;
};
const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  cardNumber,
  cashOnDelivery,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[cardStyle.container, styles.container]}>
      <View style={styles.labelContainer}>
        <View style={styles.iconLogoContainer}>
          <Image
            resizeMode="center"
            style={styles.iconLogo}
            source={
              cashOnDelivery
                ? AppIcons.IconDelivery
                : AppIcons.IconLogoMasterCard
            }
          />
        </View>
        <Text style={[cardStyle.titleText, { marginLeft: 10 }]}>
          {cashOnDelivery ? 'Cash on delivery' : formatCardNumber(cardNumber)}
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.iconLogo, { height: 22, width: 14 }]}
        source={AppIcons.IconArrowToRight}
      />
    </TouchableOpacity>
  );
};
export default PaymentMethodCard;
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
  iconLogo: {
    width: 35,
    height: 25,
  },
  iconLogoContainer: {
    width: 60,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
