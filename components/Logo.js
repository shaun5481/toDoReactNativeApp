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



export default function Logo() {
    return (
        <View style={styles.container}>
        <Text style={styles.logoText}>The Todo List</Text>
        </View>
        

    );}

    const styles = StyleSheet.create({
        logoText: {
            fontSize: 30,
            marginVertical: 15,
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 'bold',
        },
        container:{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    });