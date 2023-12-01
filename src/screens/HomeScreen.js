import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, TouchableOpacity} from "react-native";
import API from "../api/API"
import SearchBar from '../components/SearchBar';

const HomeScreen = function (props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const imageResults = async function (image) {
    try {
      const response = await API.get(
        `http://comicvine.gamespot.com/api/issues/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8&filter=image:${image}&field_list=image`,
        {
          params: {
            format: "json",
            api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8",
          },
        }
      );
     
      
      setImageUrl(response.data.results[5].image.original_url);
    } catch (e) {
      console.log(e, "error");
      
    }
  };

  const searchApi = async function (name) {
    try {
      const response = await API.get(
        `https://comicvine.gamespot.com/api/issues/?api_key=&filter=name:${name}&format=json`,
        {
          params: {
            format: "json",
            api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8",
            limit: 50,
          },
        }
      );
      setResults(response.data.results);
     
      response.data.results.forEach((issue) => {
        imageResults(issue.image.original_url);
      });
      } 
      catch (e) {
      console.log(e, "error");
      
    }
  };

  return ( 
    <View style={styles.root}>
      
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={function (newName) {
          setSearchTerm(newName);
        }}
        onSearchTermSubmit={function () {
          searchApi(searchTerm);
        }}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <TouchableOpacity>
            <Image source={{ uri: item.image.original_url }}
            style={{ width: 300, height: 500 }}  />
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
    height: 50,
    width: 50,
    justifyContent: "center"

  }
});

export default HomeScreen;