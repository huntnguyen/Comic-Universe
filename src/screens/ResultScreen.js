import React from "react";
import { Text, StyleSheet, View, Button, Image,TouchableOpacity} from "react-native";


const ResultScreen = (props) => {
  const results = props.navigation.getParam("results");
  const name = props.navigation.getParam("name")

  return (
    <View style = {styles.root}>
      <Text>Name: {name}</Text>
      {/* <Image source= {{uri: results[1].image.icon_url }}/> */}
      {/* {console.log(Object.keys(results[0]))} */}
      {results.map(function(item, index){
        console.log(item, index, '\n');
        
        return <Text>{item.name}</Text>
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