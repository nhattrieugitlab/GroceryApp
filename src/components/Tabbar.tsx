import {ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
type TabBarProps = {
    label: string,

};
const TabBar: React.FC<TabBarProps> = ({label}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    img:{
        width:16.88,
        height:22.5,
        marginRight:10,
    },
    label:{
        width:122,
        height:29,
        color:'#FF5E00',
        fontFamily:'Klarna Text',
        fontSize:24,
        fontWeight:'700',

    },
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
export default TabBar;