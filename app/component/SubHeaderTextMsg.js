import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


const SubHeaderTextMsg =(props)=>{
    return(
            <Text style={[styles.text,{ fontSize:props.fontSize == undefined ? 14 :props.fontSize, fontWeight:props.fontWeight == undefined ?"bold": props.fontWeight }]}>{props.text}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"#4A4A4A",
        fontFamily:"Droid Sans",
        fontStyle:"normal",
        textAlign:"center",
        fontWeight:"400"
    }
  });
export default SubHeaderTextMsg;