import React, { Component } from 'react';
import {Text} from "react-native";

const TextComponent =(props)=>{
    return(
        <Text>{props.value}</Text>
    )
}
export default TextComponent;