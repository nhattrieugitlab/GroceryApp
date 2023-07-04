import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenContainer from '../components/ScreenContainer'
import TabBar from '../components/Tabbar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { logOut } from '../service/login'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { setShowLoading } from '../redux/isLoadingSlice'
import { useNavigation } from '@react-navigation/native';
import { AppStackParams } from '../routes/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
function ProfileScreen(): JSX.Element {
    const dispatch = useDispatch<AppDispatch>()
    const appNavigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
    return (
        <ScreenContainer>
            <TabBar showBackButton label="Profile" />
            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_account.png')} />
                    <Text style={styles.profileLabel}>Edit Profile</Text>
                </View>

                <Image
                    style={styles.iconBackRight}
                    source={require('../assets/icon/ic_arr_to_right.png')} />
            </View>
            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_key2.png')} />
                    <Text style={styles.profileLabel}>Change Password</Text>
                </View>

                <Image
                    style={styles.iconBackRight}
                    source={require('../assets/icon/ic_arr_to_right.png')} />
            </View>
            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_card.png')} />
                    <Text style={styles.profileLabel}>My Cards</Text>
                </View>

                <Image
                    style={styles.iconBackRight}
                    source={require('../assets/icon/ic_arr_to_right.png')} />
            </View>
            <Text style={styles.titleSetting}> App Settings</Text>

            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_bell.png')} />
                    <Text style={styles.profileLabel}>Notifications</Text>
                </View>

                <Image
                    style={styles.iconOnOff}
                    source={require('../assets/icon/onoff.png')} />
            </View>
            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_language.png')} />
                    <Text style={styles.profileLabel}>Language</Text>
                </View>
                <View style={styles.changeLanguageContainer}>
                    <Text style={styles.changeLanguage}>English</Text>
                    <Image
                        style={styles.iconBackRight}
                        source={require('../assets/icon/ic_arr_to_right.png')} />
                </View>

            </View>
            <TouchableOpacity onPress={async () => {
                dispatch(setShowLoading({ isShowLoading: true }))
                await logOut()
                appNavigation.reset({
                    index: 0,
                    routes: [{ name: 'AuthNavigator' }],
                })
                dispatch(setShowLoading({ isShowLoading: false }))

            }} style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_logout.png')} />
                    <Text style={styles.profileLabel}>Logout</Text>
                </View>
                <Image
                    style={styles.iconBackRight}
                    source={require('../assets/icon/ic_arr_to_right.png')} />
            </TouchableOpacity>

        </ScreenContainer>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    changeLanguageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    changeLanguage: {
        marginRight: 14,
        height: 22,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        textAlignVertical: 'top',
        color: '#804f1e',
    },
    iconOnOff: {
        width: 39,
        height: 24,
    },
    titleSetting: {
        marginBottom: 33,
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: -0.3,
        color: '#FF5E00',
    },
    iconBackRight: {
        width: 6.667,
        height: 12
    },
    profileLabel: {
        marginLeft: 15,
        height: 22,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'top',
        color: '#804f1e',
    },
    profileItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileItemContainer: {
        marginBottom: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconProfile: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
    },
    imageBack: {
        width: 9,
        height: 14,
    },

})