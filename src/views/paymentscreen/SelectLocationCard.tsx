import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {AppIcons} from '../../constant/IconPath';
import {useState} from 'react';
import SelectLocationModal from '../../components/modal/SelectLocationModal';
import SelectAddressModal from '../../components/modal/SelectAddressModal';
import {cardStyle} from './CardStyle';
const SelectLocationCard: React.FC<{
  onGetLocationComplete: Function;
  address: string;
}> = ({onGetLocationComplete, address}) => {
  const [isShowSelectLocationModal, setShowSelectLocationModal] =
    useState<boolean>(false);
  const [isShowSelectAddressModal, setShowSelectAddressModal] =
    useState<boolean>(false);
  return (
    <View style={cardStyle.container}>
      <View style={styles.group}>
        <Text style={cardStyle.titleText}>Delivery Location</Text>
        <TouchableOpacity
          onPress={() => {
            setShowSelectLocationModal(true);
          }}>
          <Image style={{width: 30, height: 30}} source={AppIcons.IconMap} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowSelectAddressModal(true);
        }}
        style={[
          styles.group,
          {justifyContent: 'flex-start', alignItems: 'center'},
        ]}>
        <Image style={styles.iconLocation} source={AppIcons.IconLocation} />
        <Text style={[cardStyle.contentText, {marginLeft: 17, width: 220}]}>
          {address ? address : 'Enter your location'}
        </Text>
      </TouchableOpacity>
      <SelectLocationModal
        isShowModal={isShowSelectLocationModal}
        setShowModal={setShowSelectLocationModal}
        onGetLocationComplete={() => {}}
      />
      <SelectAddressModal
        isShowModal={isShowSelectAddressModal}
        setShowModal={setShowSelectAddressModal}
        onGetLocationComplete={onGetLocationComplete}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  iconLocation: {
    width: 20,
    height: 29,
  },
  changeLocationText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.6,
    color: '#FF5E00',
  },
  group: {
    alignItems: 'center',
    marginBottom: 17,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default SelectLocationCard;
