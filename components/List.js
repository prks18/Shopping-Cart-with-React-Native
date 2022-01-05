import React, {useState, useEffect, createContext} from 'react';
import {View, FlatList} from 'react-native'
import axios from 'axios'
import ListItem from './ListItem.js'
import { useCallback } from 'react/cjs/react.production.min';
const serverUrl = "http://localhost:9000"


const RenderItem = ({item, handler}) => { 
     console.log(item, handler)
      return (<ListItem item = {item} deleteItem = {deleteItem} editItem = {editItem} handler = {handler} />) 
}
const deleteItem = (id, title, setItems) => {
      setItems(prevItems => { 
      return prevItems.filter((item) => item.id !== id)
    })
     axios.delete(serverUrl + "/deleteItem/" + title)
          .then(function(resp) {
                console.log(resp)
          })
          .catch(function(err) {
                console.log(err)
          })
  }  

const editItem = (id, title, newTitle, setItems) => {
    
      axios.put(serverUrl + "/editItem/" + title + "/" + newTitle)
            .then(function(resp) {
                  console.log(resp)
            })
            .catch(function(err) {
                  console.log(err)
            })
      setItems(prevItems => {
            return prevItems.map((item) => {
                  if(item.id == id) {
                        item.title = newTitle
                  }
            })
      })
}

const List = ({items, setItems}) => {
console.log(setItems)

return (
      <FlatList 
      data = {items}
      renderItem = {(item)=> <RenderItem item = {item}  handler = {setItems} />}
      keyExtractor = {item => item.id}
      extraData = {setItems}
      />
      )
}
export default List
