import * as React from 'react';
import { Text, Pressable, ImageBackground, StyleSheet, View, StatusBar } from 'react-native';
import gbImage from '../assets/workingspace.jpg';


export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={gbImage} style={styles.container}>
            <StatusBar backgroundColor={'#55BCF6'}/>
            <Text style={styles.titlee}>Todo App</Text> 
          
        </ImageBackground>
    )};


    const styles = StyleSheet.create({
          container:{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
          },
          titlee: {
            position: 'absolute',
            fontSize: 45,
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 230,
            textTransform: 'uppercase',
            color: '#2e8fe4',
            fontWeight: 'bold',
            paddingLeft: 20,
            //textAlign: 'center',
            top: 40,
        },
    });
