import { createStackNavigator } from "react-navigation-stack"
import About from "../screens/About";
import Header from '../shared/header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ( { navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About Zelda Fan Page'/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#eee'}
    }
});

export default AboutStack;