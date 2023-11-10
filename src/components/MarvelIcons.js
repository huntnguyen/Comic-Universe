import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";

const MarvelIcons = (props) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
            }}>
        <Text style = {styles.text}> </Text>
        <TouchableOpacity
            activeOpacity={0.5}>
                <Image style = {styles.image}
                source = {require('../../assets/spiderman.png')}
                resizeMode = {'stretch'} />
            </TouchableOpacity>  

            <TouchableOpacity
            activeOpacity={0.5}>
                <Image style = {styles.image}
                source = {require('../../assets/hulk.png')}
                resizeMode = {'stretch'} />
            </TouchableOpacity>  
    </View>
    
    )
    };
    

const styles = StyleSheet.create({
    image: {
        flexDirection: 'row',
        width: 100,
        height: 100,
    },
    text: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'magenta',
        textShadowColor: 'black', textShadowRadius: 10,
      },
});

export default MarvelIcons;