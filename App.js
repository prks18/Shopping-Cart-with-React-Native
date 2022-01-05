import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, createContext} from 'react';
import { StyleSheet, Text, Image, View, TextInput, SafeAreaView, Button, FlatList } from 'react-native';
import $ from 'jquery'
import Header from './components/Header.js'
import List from './components/List.js'
import AddItem from './components/AddItem.js'
import axios from 'axios';
import {styles} from './Styles/styles.js'
const serverUrl = "http://localhost:9000"

$(document).ready(function(){
  console.log("hello ready")
})

const myApp =  () => { 
const [items, setItems] = useState([])   
useEffect(()=>{
  axios.get(serverUrl + "/getAllItems")
       .then(function(resp) {
            setItems(resp.data)          
          })
       .catch(function(err){
            console.log(err)
          })
},[])
  
  const addItemToList = (text) => {
    console.log(text)
    axios.post(serverUrl + "/createItem",{title : text})
        .then((resp)=>{
           console.log(resp)
           setItems(prevItems => { return [...prevItems, { 
             id : prevItems[prevItems.length - 1].id + 1, 
             title : text 
            } ] 
          })
        }) 
        .catch((err) => {
          console.log(err)
        }) 
    
  }
  return (
    <SafeAreaView>
      <Header/>
      <AddItem addItemToList = {addItemToList}/>
      <List items = {items} setItems = {setItems}/>
    </SafeAreaView>
  )

  
}


export default myApp