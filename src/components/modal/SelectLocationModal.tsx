import MapView, {LatLng, Marker} from 'react-native-maps';
import {useState, useEffect} from 'react';
import {getCurrentLocation} from '../../utilities/GetCurrentLocation';
import Modal from 'react-native-modal';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {requestLocationPermission} from '../../utilities/RequestPermission';
import {StyleSheet} from 'react-native';
import Button from '../Button';
export type SelectLocationProps = {
  setShowModal: Function;
  isShowModal: boolean;
  onGetLocationComplete: Function;
};
const SelectLocationModal: React.FC<SelectLocationProps> = ({
  setShowModal,
  isShowModal,
  onGetLocationComplete,
}) => {
  const [currentLocation, setCurrentLocation] = useState<LatLng>({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    isShowModal &&
      requestLocationPermission(() => {
        getCurrentLocation(setCurrentLocation);
      });
  }, []);
  return (
    <Modal
      animationIn={'fadeIn'}
      onBackButtonPress={() => {
        setShowModal(false);
      }}
      style={styles.modalContainer}
      isVisible={isShowModal}>
      <View
        style={{
          flex: 1,
          borderRadius: 12,
          backgroundColor: 'white',
        }}>
        <MapView
          style={{
            width: '100%',
            height: '100%',
          }}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              longitude: currentLocation.longitude,
              latitude: currentLocation.latitude,
            }}
          />
        </MapView>
        <View style={styles.searchLocationContainer}>
          <Text style={styles.selectLocationText}>Select Location</Text>
          <TextInput
            returnKeyType="search"
            style={styles.textInput}
            placeholder="Search your location"
          />
          <Button onPress={onGetLocationComplete} label="Save location" />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  selectLocationText: {
    fontWeight: 'bold',
    fontSize: 21,
    lineHeight: 32,
    color: '#1E1E1E',
  },
  searchLocationContainer: {
    height: 200,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    width: '100%',
    bottom: 0,
    padding: 10,
    position: 'absolute',
    backgroundColor: 'white',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
  },
  modalContainer: {
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 1,
    height: '100%',
    width: '100%',
    padding: 25,
  },
});
export default SelectLocationModal;
