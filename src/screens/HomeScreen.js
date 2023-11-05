import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Button, Image} from "react-native";
import API from "../api/API"
import SearchBar from '../components/SearchBar';
import axios from "axios"

const HomeScreen = function(props){

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async function(name){
    try{
        axios 
            .get("https://superheroapi.com/api/" + 
             "API KEY" +
                "/search/ironman")
            .then((response) => { 
                console.log(response.data)
            }); 
      // const response = await API.get('/character', {
      //   params: {
      //   }
      // });
      // setResults(response.results);
      // console.log(response.results);
    }
    catch(e){
      console.log(e, "error");
    }
  }

  return <View style = {styles.root}>
    
      <Button title = {"test API"}
        onPress={function(){searchApi()}}
      /> 
      <Text>Home</Text>
      <Text>{results}</Text>
    </View>
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default HomeScreen;