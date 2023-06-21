import {useState} from 'react';
import {TextInput, ScrollView, Alert} from 'react-native';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import data from '../../constant/location.json';
import {SelectLocationProps} from './SelectLocationModal';
import {
  getCommuneByDistrictId,
  getDistrictByProvinceId,
} from '../../utilities/FilterLocation';
import {
  District,
  Province,
  Commune,
  Address,
} from '../../datatypes/LocationDataTypes';
import TabBar from '../Tabbar';
import Button from '../Button';
import LocationDropDownMenu from '../LocationDropDownMenu';
const SelectAddressModal: React.FC<SelectLocationProps> = ({
  isShowModal,
  onGetLocationComplete,
  setShowModal,
}) => {
  const [province, setProvince] = useState<Province>();
  const [district, setDistrict] = useState<District>();
  const [commune, setCommune] = useState<Commune>();
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [districts, setDistricts] = useState<District[]>([]);
  const [communes, setCommunes] = useState<Commune[]>([]);
  const validateAddress = (): boolean => {
    console.log(province);
    return !(
      province == undefined ||
      district == undefined ||
      commune == undefined ||
      detailAddress.length == 0
    );
  };
  return (
    <Modal
      animationIn={'fadeIn'}
      onBackButtonPress={() => {
        setShowModal(false);
      }}
      style={styles.modalContainer}
      isVisible={isShowModal}>
      <TabBar style={{marginBottom: 30}} label="Select your address" />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}>
        <LocationDropDownMenu
          label="Your City:"
          type="Province"
          placeholder="Chose your city"
          onChange={(province: Province) => {
            setDistricts(getDistrictByProvinceId(province.idProvince));
            setProvince(province);
            setCommune(undefined);
            setDistrict(undefined);
          }}
          data={data.province}
        />
        <LocationDropDownMenu
          label="Your District:"
          type="District"
          placeholder="Chose your district"
          onChange={(district: District) => {
            setDistrict(district);
            setCommune(undefined);
            setCommunes(getCommuneByDistrictId(district.idDistrict));
          }}
          data={districts}
        />
        <LocationDropDownMenu
          style={{marginBottom: 20}}
          label="Your Commune:"
          type="Commnune"
          placeholder="Chose your commune"
          onChange={(commune: Commune) => {
            setCommune(commune);
          }}
          data={communes}
        />
        <TextInput
          value={detailAddress}
          onChangeText={setDetailAddress}
          placeholder="Detail your address"
          style={styles.detailAddressTextInput}
        />
        <Button
          onPress={() => {
            console.log(validateAddress());
            if (!validateAddress()) {
              Alert.alert('Warring !', 'Please enter validate address');
              return;
            }
            const address: Address = {
              ProvinceName: province!?.name,
              CommnueName: commune!?.name,
              DetailAddress: detailAddress,
              DistricName: district!?.name,
            };
            onGetLocationComplete(address);
            setCommune(undefined);
            setDetailAddress('');
            setDistrict(undefined);
            setProvince(undefined);

            setShowModal(false);
          }}
          style={{marginTop: 30}}
          label="Save your address"
        />
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  detailAddressTextInput: {
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
    paddingHorizontal: 12,
    height: 60,
    width: '100%',
    borderColor: '#FF5E00',
    borderRadius: 12,
    borderWidth: 2,
  },
  modalContainer: {
    justifyContent: 'flex-start',
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '95%',
    padding: 25,
  },
});
export default SelectAddressModal;
