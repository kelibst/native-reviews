import React from 'react'
import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }
    return (
        <View><Text>Home Screen!</Text>
            <Button title="Go to review dets" onPress={pressHandler}/>
        </View>
    )
}

export default Home
