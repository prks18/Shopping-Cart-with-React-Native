import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native'
import { useState } from 'react/cjs/react.development';
import {styles} from '../Styles/styles.js'

const Item = ({item, deleteItem, editItem, handler}) => {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState('')
   return (<TouchableOpacity>
        <View style = {styles.item} >
            {edit ? <TextInput 
            style = {styles.itemTextInp} 
            placeholder = "Enter Title"
            onChangeText = {text => setEditText(text)}
            defaultValue = {editText} ></TextInput> : <Text style = {styles.itemText}>{item.item.title}</Text>}
            
            {/* <TouchableOpacity style = {styles.itemModBtn}
            onPress = {()=>{ setEdit(true);}}>
                <Text style = {styles.btnText}>Edit</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style = {styles.itemDelBtn}
            onPress = {()=>{deleteItem(item.item.id, item.item.title, handler)}}>
                <Text style = {styles.btnText}>Delete</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>);

}
// editItem(item.item.id, item.item.title, handler)  

export default Item;