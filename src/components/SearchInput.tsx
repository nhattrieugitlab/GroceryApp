import { Text, View, StyleSheet, TextInput, Image, } from "react-native";
type TextInputProps = {

};

const searchInput: React.FC<TextInputProps> = ({ }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.img} source={require('../assets/icon/search.png')} />
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
            />
        </View>

    );
}
const styles = StyleSheet.create({
    img: {
        top: 25,
        left: 21,
        width: 20,
        height: 20,
        position: 'absolute',
    },
    container: {
        width: '100%',
        height: 300,
        position: 'relative',
        marginStart: 20
    },
    input: {
        position: 'absolute',
        width: 343,
        height: 48,
        margin: 12,
        paddingStart: 35,
        borderRadius: 10,
        backgroundColor: ' rgba(254,233,182,0.4)',
    },
});
export default searchInput;