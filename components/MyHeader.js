import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';


const MyHeader =(props)=>{
    return(
        <Header 
        centerComponent={{ text: props.title, style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
        backgroundColor = "#ff5202"
        />
    )
}

export default MyHeader