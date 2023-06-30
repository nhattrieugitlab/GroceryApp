import { View, TextInput, Text, StyleSheet } from 'react-native';
import CountryPicker2 from './CountryPicker2';

const SurNameInput: React.FC<{
    err?: boolean;
    errMessage?: string;
    onChanePass?: Function;
    value?: string;
}> = ({ err, errMessage, onChanePass, value }) => {
    return (
        <View style={logInTextInputStyles.container}>
            <TextInput
                value={value}
                style={[
                    logInTextInputStyles.textInput,
                    err && { borderBottomColor: 'red', borderBottomWidth: 1 },
                ]}
                placeholderTextColor={'#AC8E71'}
                placeholder="Name SurName"
                onChangeText={(text: string) => {
                    onChanePass && onChanePass(text);
                }}
            />
            {err && (
                <>
                    <Text style={{ color: 'red' }}>{errMessage}</Text>
                    {console.log('errMessage', errMessage)}
                </>
            )}
        </View>
    );
};
export default SurNameInput;
const logInTextInputStyles = StyleSheet.create({
    container: {
        height: 48,
        borderRadius: 5,
        backgroundColor: '#F3F3F3',
        marginTop: 13,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    textInput: {
        height: '100%',
        width: '100%',
        fontFamily: 'Klarna Text',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        color: '#FF5E00',
        paddingLeft: 70,
    },
});