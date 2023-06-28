import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native'
import React from 'react'
import { AppIcons } from '../constant/IconPath'
import TabBar from '../components/Tabbar'
import { ScreenContainer } from 'react-native-screens'
import PhoneNumberInput from '../components/PhoneNumberInput'
import Button from '../components/Button'



const EditProfileScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Image style={{ width: 8.49, height: 14 }} source={AppIcons.IconBack2} />
            </TouchableOpacity>
            <TabBar label="Edit Profile" />
            <TextInput style={styles.textInput} placeholder="" />
            <PhoneNumberInput showCountryPicker />
            <Button style={styles.btn}  label="Update Profile" />
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    btn: {
        top: 300,
    },
    textInput: {
        width: 353,
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginTop: 64,
        padding:10,
        marginBottom: 20,
    },    
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
    }
})