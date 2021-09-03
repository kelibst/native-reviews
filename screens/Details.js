import React from 'react'
import { Text, View } from 'react-native'

const Details = ({navigation}) => {
    return (
        <View>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}

export default Details
