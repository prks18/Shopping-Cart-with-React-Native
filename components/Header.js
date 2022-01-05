import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../Styles/styles.js'
const Header = (props) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.text}><h1> {props.title} </h1></Text>
        </View>
    )
}

Header.defaultProps = {
    title : "Shopping Cart"
}

export default Header