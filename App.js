import React, {useState, useEffect} from 'react';
import {
   StyleSheet,
   Text, 
   View, 
   SafeAreaView, 
   TextInput, 
   TouchableOpacity,
   FlatList,
   Alert
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import TodoList from './components/TodoList';
import ForgotPasswordScreen from "./components/ForgotPasswordScreen"
import HomeScreen from './components/HomeScreen';
import Signup from './components/Signup';
import Login from './components/Login';
import Logo from './components/Logo';
import ConfirmEmailScreen from './components/ConfirmEmailScreen.js';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {

  const [showSplashScreen, setShowSplashScreen] = useState(true);


  useEffect (() =>{
    setTimeout(() =>{
      setShowSplashScreen(false);

    },5000);

  }, [])
     return(
      <NavigationContainer>
      <Stack.Navigator>
      {showSplashScreen ?  (<Stack.Screen name="Splash" component={HomeScreen} options={{header: () => null}} /> ): null}
      <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
      <Stack.Screen name="Signup" component={Signup} options={{header: () => null}} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{header: () => null}} />
      <Stack.Screen name="Home" component={TodoList} options={{header: () => null}} />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} options={{header: () => null}} />
      

        </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  actionIcon:{
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 3,
  },
  ContainerWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header:{
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputRow:{
    position: 'absolute',
    color: '#fff',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    bottom: 0,

  },
  inputContainer:{
     backgroundColor: '#fff',
     flex: 1,
     height: 50,
     elevation: 40,
     marginRight: 20,
     borderRadius: 30,
     marginVertical: 20,
     paddingHorizontal: 20,
  },
  iconContainer:{
    height: 50,
    width: 50,
    backgroundColor: '#55BCF6',
    borderRadius: 25,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  listItem:{
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    elevation: 12,
  },

});
