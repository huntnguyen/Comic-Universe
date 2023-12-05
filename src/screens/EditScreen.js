import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {Context} from "../context/ListContext"
import ListForm from '../components/ListForm';

const EditScreen = (props) => {

    const listID = props.navigation.getParam("id");

    const { state, editList } = useContext(Context);

    const listPost = state.find ((currentPost) => {
            return currentPost.id === listID
        }
    )

    return <ListForm 
    onSubmit = {(title, content) =>  {editList(listID, title, content, () => {props.navigation.pop()})}}
    inititalValues = {{title: listPost.title, content: listPost.content}}
    />
}

const styles = StyleSheet.create({

});

export default EditScreen;