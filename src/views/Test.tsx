import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
function Test() {
    useEffect(() => {
        GoogleSignin.configure({ webClientId: '753556013473-31c26o24cf0l1tt5k0g3ovp89i545ttm.apps.googleusercontent.com' });
    }, []);

    async function onGoogleButtonPress() {
        console.log('click');

        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices();
        // Get the users ID token
        try {
            const userInfo = await GoogleSignin.signIn();

            console.log(userInfo);

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (err) {
            console.log(err)
        }
        // Sign-in the user with the credential
    }
    return (
        <>
            <Button title="Login" onPress={() => {
                onGoogleButtonPress()
                // Somewhere in your code

            }} />
        </>
    );
}
export default Test