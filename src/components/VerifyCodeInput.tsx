import {TextInput, StyleSheet} from 'react-native';
const VerifyCodeInput = () => {
  return (
    <TextInput
      keyboardType="number-pad"
      maxLength={1}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    color: '#FF5E00',
    borderBottomColor: '#7F4E1D',
    borderBottomWidth: 3,
    fontSize: 24,
    width: 50,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default VerifyCodeInput;
