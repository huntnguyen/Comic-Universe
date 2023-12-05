import React from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import bg from '../../assets/comicbg.gif'


const ResultScreen = (props) => {
  const results = props.navigation.getParam("results");
  const name = props.navigation.getParam("name")

  return (
    <View style = {styles.root}>
      {/* <Text>Name: {name}</Text> */}
      {/* <Image source= {{uri: results[1].image.icon_url }}/> */}
      {/* {console.log(Object.keys(results[0]))} */}
      {/* {results.map(function(item, index){
        console.log(item, index, '\n');
        
        return <Text>{item.name}</Text>
      })} */}

      <ImageBackground
      imageStyle={styles.backgroundImage}
      source= {bg}
      resizeMode='cover'
    />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style = {styles.text} >Name: {item.name}</Text>
            <TouchableOpacity>
            <Image source={{ uri: item.image.original_url }}
            style={styles.image}  />
           </TouchableOpacity>
          </View>
        )}
      />
      
    </View>
  );
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  image: {
    height: 300,
    width: 390,
    justifyContent: "center",
    resizeMode: "contain"
  },
  backgroundImage: {
    flex: 1, 
    width: 500, 
    height: 900, 
    resizeMode: 'cover',
  },
  text:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
});

export default ResultScreen;