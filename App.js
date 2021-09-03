import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { globalStyles } from './styles.js/global';

  const getFonts = () => Font.loadAsync({
    'Nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
    'Nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf')
})


export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
    <View style={globalStyles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
  }else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setfontsLoaded(true)}
      onError={console.warn}
      />
    )
  }
}