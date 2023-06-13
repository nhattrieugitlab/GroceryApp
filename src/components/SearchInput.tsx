import {View, StyleSheet, TextInput, Image} from 'react-native';
import {AppIcons} from '../constant/IconPath';

const SearchInput = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={'#6D380591'}
        style={styles.input}
        placeholder="Search"
      />
      <Image style={styles.icon} source={AppIcons.IconSearch} />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    left: 17,
    top: 14,
    position: 'absolute',
    width: 20,
    height: 20,
  },
  container: {
    position: 'relative',
    width: '100%',
    height: 48,
  },
  input: {
    paddingLeft: 42,
    color: '#6D380591',
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
  },
});
export default SearchInput;
