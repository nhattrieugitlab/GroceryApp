import {View} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TabBar from '../components/Tabbar';
import Button from '../components/Button';
import BottomSheet from '@gorhom/bottom-sheet';
const SelectPaymentMethodScreen = () => {
  return (
    <ScreenContainer>
      <TabBar label="Payment method" />
      <Button onPress={() => {}} label="Done" />
    </ScreenContainer>
  );
};
export default SelectPaymentMethodScreen;
