import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {Context} from "../context/ListContext"
import ListForm from '../components/ListForm';

const CreateListScreen2 = (props) => {

    const {addList} = useContext( Context );

    return <ListForm onSubmit={(title, content) => {
        addList(title, content, () => {props.navigation.navigate("Index")})
    }}/>

}

const styles = StyleSheet.create({
    
});

export default CreateListScreen2;