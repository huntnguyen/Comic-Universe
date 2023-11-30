import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";


const ResultScreen = (props) => {
  const results = props.navigation.getParam("results");


  return (
    <View style = {styles.root}>
      <Text>Name: {results.name}</Text>
      {results.forEach(function(item, index){
        console.log(item);
      })}
      
    </View>
  );
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default ResultScreen;