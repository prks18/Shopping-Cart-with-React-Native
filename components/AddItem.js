import React,{useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button, TextInput} from 'react-native'
import {styles} from '../Styles/styles.js'

const addItem = ({addItemToList}) => {
    
    const [text, setText] = useState('')
    const onChange = textValue => setText(textValue)

    return ( 
        <View>
        <TextInput style = {styles.addInput}  placeholder = "Enter item to add"
        onChangeText = {onChange}
        ></TextInput>
        <TouchableOpacity 
        style = {styles.addItemBtn} 
        onPress = {() => { addItemToList(text) }}
        >
            <Text style = {styles.addItemTxt}>Add</Text>
        </TouchableOpacity>
    </View>
   )
}


export default addItem;