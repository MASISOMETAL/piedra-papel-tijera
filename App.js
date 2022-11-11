import React from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './scr/navigation';
import { useFonts } from 'expo-font';
import store from './scr/store';
import { Provider } from 'react-redux';
import { init } from './scr/db';

const App = () =>{

  const [loaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });
  

  if (!loaded) {
    return (
      <View style={styles.containerLoad}>
        <ActivityIndicator size="large" color={"#d1d1d1"} />
      </View>
)}

init()
.then(() =>{
    console.log("Initialized database");
})
.catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
});

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
            <AppNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  containerLoad:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  }
});

export default App;