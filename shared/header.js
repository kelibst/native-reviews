import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const header = ({ navigation, title }) => {
    const pressHandler = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={pressHandler} style={styles.icon} />
            <View>
                <Text style={styles.headerText }>{title}</Text>
            </View>
        </View>
    )
}
export default header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontFamily: 'Nunito-bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})
