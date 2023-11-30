import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Button, Image, FlatList} from "react-native";
import API from "../api/API"
import SearchBar from '../components/SearchBar';
import axios from "axios"

const HomeScreen = function(props){

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const imageResults = async function(image){
    try{
        axios 
       const response = await API.get(`http://comicvine.gamespot.com/api/issues/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8& filter=image: ${image} &field_list=image`, {
        params: {
         format: "json",
         api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8"
        }
      });
      console.log(response.data.results)
   }
    catch(e){
      console.log(e, "error");
    }
  }
  const searchApi = async function(name){
    try{
        axios 
        const response = await API.get(`https://comicvine.gamespot.com/api/characters/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8&filter=name:${name}&format=json`, {
          params: {
           format: "json",
           api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8",
           limit: 50
          }
      });
      setResults(response.data.results);
   }
    catch(e){
      console.log(e, "error");
    }
  }

  return <View style = {styles.root}>
    
      <Button title = {"test API"}
        onPress={function(){imageResults()}}
      /> 
      <SearchBar searchTerm = {searchTerm} 
        onTermChange = {function(newName){setSearchTerm(newName)}}
        onSearchTermSubmit = {function(){searchApi(searchTerm)}}
      />
      <Text>Name: {searchTerm}</Text>
      {results.map(function(item, index){
        return <Text>{item.name}</Text>
      })}

     <Image resizeMode = "contain" style = {styles.image} source = { {uri: "https://comicvine.gamespot.com/a/uploads/original/0/4/76-886-77-1-daredevil-comics.jpg"}} />
    </View>
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  image: {
    height: 500,
    width: 300,
    justifyContent: "center"

  }
});

export default HomeScreen;