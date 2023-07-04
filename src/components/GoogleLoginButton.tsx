import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const GoogleLoginButton = () => {
    useEffect(() => {
        GoogleSignin.configure({ webClientId: '753556013473-31c26o24cf0l1tt5k0g3ovp89i545ttm.apps.googleusercontent.com' });
        GoogleSignin.signOut()

    }, []);
    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices();
        // Get the users ID token
        try {
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (err) {
            console.log(err)
        }
    }
    return <TouchableOpacity style={styles.container} onPress={onGoogleButtonPress}>

    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 24,
    }
})
export default GoogleLoginButton