import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Context} from "../context/ListContext"
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons'

const ListShowScreen = (props) => {

    const {state} = useContext(Context);

    const listID = props.navigation.getParam("id");

    const list = state.find((list) => {
        return listID === list.id;
    })

    return <View>
        <Text> {list.title} </Text>
        <Text> {list.content} </Text>
    </View>
}

ListShowScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress = {() => {props.navigation.navigate("Edit", {id: props.navigation.getParam("id")})}}>
                <FontAwesome name = "pencil" size = {30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ListShowScreen;