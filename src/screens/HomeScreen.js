import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Button, Image, FlatList} from "react-native";
import API from "../api/API"
import SearchBar from '../components/SearchBar';
import axios from "axios"

const HomeScreen = function(props){

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async function(name){
    try{
        axios 
            //.get("https://superheroapi.com/api/" + 
           // 393090373041973 +
               // "/search/ironman")
           // .then((response) => { 
            //    console.log(response.data)
          //  }); 
       const response = await API.get(`http://comicvine.gamespot.com/api/issues/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8& filter=name: ${name} &field_list=name`, {
        params: {
         format: "json",
         api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8"
        }
      });
      setResults(response.data.results);
      // console.log(Object.keys(response));
      console.log(response.data.results)
        // console.log(response.statusText )
          // console.log(response.headers )
            // console.log(response.config )
              // console.log(response.request)
   }
    catch(e){
      console.log(e, "error");
    }
  }

  return <View style = {styles.root}>
    
      <Button title = {"test API"}
        onPress={function(){searchApi()}}
      /> 
      <SearchBar searchTerm = {searchTerm} 
        onTermChange = {function(newName){setSearchTerm(newName)}}
        onSearchTermSubmit = {function(){searchApi(searchTerm)}}
      />
      <Text>Name: {searchTerm}</Text>
      {results.map(function(item, index){
        return <Text>{item.name}</Text>
      })}
    </View>
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default HomeScreen;