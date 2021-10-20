import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { useState, useEffect } from 'react';

const TextInputComponent = (props) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [text, onChangeText] = useState(props.value);
 // const [errorDisplay, onChangeText] = useState(false);
//alert(props.value)
useEffect(() => {
    // Update the document title using the browser API
    // alert(text)
  });
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        placeholderTextColor="red" 
       // keyboardType="numeric"
      />
     
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'green',
  },
});
export default TextInputComponent;