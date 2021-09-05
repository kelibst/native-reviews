import { createStackNavigator } from "react-navigation-stack"
import Details from "../screens/Details";
import { createAppContainer } from 'react-navigation'
import Home from "../screens/Home";
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Zelda Fan Page'/>,
            }
        }
    },
    ReviewDetails: {
        screen: Details
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#eee'}
    }
});

export default HomeStack;