import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppIcons } from '../constant/IconPath';
import { KEY } from '../constant/Key';
import { loginWithGooogle } from '../service/login';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setShowLoading } from '../redux/isLoadingSlice';
import { useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../routes/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const GoogleLoginButton = () => {
    useEffect(() => {
        GoogleSignin.configure({ webClientId: KEY.GoogleAuthClientId });
        GoogleSignin.signOut()

    }, []);
    const appNavigation = useNavigation<NativeStackNavigationProp<AppStackParams>>()
    const dispatch = useDispatch<AppDispatch>()
    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices();
        // Get the users ID token
        try {
            const { idToken } = await GoogleSignin.signIn();
            if (idToken) {
                dispatch(setShowLoading({ isShowLoading: true }))
                const userInfo = await loginWithGooogle(idToken);
                if (!userInfo) {
                    Alert.alert('Sever error', "Sever is not response")
                    return
                }
                console.log('info', userInfo)
                appNavigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeNavigator' }],
                });
            }
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (err) {
            console.log(err)
            console.log("Login google err...")
        } finally {
            dispatch(setShowLoading({ isShowLoading: false }))

        }
    }
    return <TouchableOpacity style={styles.container} onPress={onGoogleButtonPress}>
        <Image style={styles.icon} source={AppIcons.IconGoole} />
        <Text style={styles.text}>Login with Google</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: 5,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24
    },
    text: {
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: '700',
        color: "black",

    }
})
export default GoogleLoginButton