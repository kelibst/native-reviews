import { createStackNavigator } from "react-navigation-stack"
import Details from "../screens/Details";
import { createAppContainer } from 'react-navigation'
import Home from "../screens/Home";


const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: Details
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);