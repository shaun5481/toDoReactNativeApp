import React from 'react';
import {
   StyleSheet,
   Text, 
   View, 
   SafeAreaView, 
   TextInput, 
   TouchableOpacity,
   FlatList,
   Alert,
   Image
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function Form() {
    return (
        <View style={styles.container}>
        <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Username' 
          placeholderTextColor={'#ffffff'}/>
        <TextInput 
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='Password' 
          secureTextEntry={true}
          placeholderTextColor={'#ffffff'}/>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        

    );}

    const styles = StyleSheet.create({
        container:{
            backgroundColor: '#2e8fe4',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputBox:{
            width: 300,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 25,
            height: 50,
            paddingHorizontal: 16,
            fontSize: 16,
            color: '#ffffff',
            marginVertical: 10,
        },
        button:{
           borderRadius: 25,
           backgroundColor: '#1c313a',
           backgroundColor: 'rgba(255, 255, 255, 0.3)',
           width: 300,
           marginVertical: 10,
           paddingVertical: 16,
        },
        buttonText:{
            fontSize: 16,
            fontWeight: '500',
            color: '#ffffff',
            textAlign: 'center',
        }
    });