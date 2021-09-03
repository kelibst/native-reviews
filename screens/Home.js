import React from 'react'
import { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles.js/global';

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        {title: "Legend of Zelda Ocarina of time", rating: 5, body: "very awesome", key: '1'},
        {title: "Super Mario", rating: 5, body: "very awesome", key: '2'},
        {title: "Evil Twin", rating: 5, body: "very awesome", key: '3'},
    ])
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }
    return (
        <View>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    )
}

export default Home
