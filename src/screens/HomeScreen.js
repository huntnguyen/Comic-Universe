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
        //axios 
           // .get("https://superheroapi.com/api/" + 
             //"API KEY" +
                //"/search/ironman")
           // .then((response) => { 
              //  console.log(response.data)
           // }); 
       const response = await API.get('http://comicvine.gamespot.com/api/characters/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8& filter=name: X-men&field_list=name' ,{
         params: {
          format: "json",
         }
       });
       setResults(response.results);
       console.log(response);
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