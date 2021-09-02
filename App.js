import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

  const getFonts = () => Font.loadAsync({
    'Nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
    'Nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf')
})


export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
