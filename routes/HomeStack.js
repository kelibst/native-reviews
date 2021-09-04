import { createStackNavigator } from "react-navigation-stack"
import Details from "../screens/Details";
import { createAppContainer } from 'react-navigation'
import Home from "../screens/Home";


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Zelda Fan Page',
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

export default createAppContainer(HomeStack);