import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenContainer from '../components/ScreenContainer'
import TabBar from '../components/Tabbar'

function ProfileScreen(): JSX.Element {
    return (
        <ScreenContainer>
            <Image
                style={styles.imageBack}
                source={require('../assets/icon/Back.png')}
            />
            <TabBar label="Profile" />
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
            <View style={styles.profileItemContainer}>
                <View style={styles.profileItem}>
                    <Image
                        style={styles.iconProfile}
                        source={require('../assets/icon/ic_logout.png')} />
                    <Text style={styles.profileLabel}>Logout</Text>
                </View>

                <Image
                    style={styles.iconBackRight}
                    source={require('../assets/icon/ic_arr_to_right.png')} />
            </View>

        </ScreenContainer>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    changeLanguageContainer:{
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