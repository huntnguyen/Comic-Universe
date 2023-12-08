import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import API from "../api/API"
import bg from '../../assets/comicbg.gif'
import SearchBar from '../components/SearchBar';

const SearchScreen = function (props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [imageURL, setImageUrl] = useState("");

  const imageResults = async function (image) {
    try {
      const response = await API.get(
        `http://comicvine.gamespot.com/api/issues/?api_key=5e30e068623ccb54a850a711b739bbcdf34afa3b&filter=image:${image}&field_list=image`,
        {
          params: {
            format: "json",
            api_key: "5e30e068623ccb54a850a711b739bbcdf34afa3b",
          },
        }
      );
     
      
      setImageUrl(response.data.results[0].image.original_url); 
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
            api_key: "5e30e068623ccb54a850a711b739bbcdf34afa3b",
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
  /*
  useEffect(() => {
    imageResults(searchTerm);
    }, []);
    */
  //{imageURL && <Image source={{ uri: imageURL }} style={styles.characterImage} />}

  return ( 
    <View style={styles.root}>
     <ImageBackground
      imageStyle={styles.backgroundImage}
      source= {bg}
      resizeMode='cover'
    />
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
            <Text style = {styles.text}>Name: {item.name}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress = {function(){props.navigation.navigate("DetailScreen", {item: item})}}>
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
  characterImage: {
    marginBottom: 5,
    width: 10,
    height: 10,
    width: 555,
    height: 350,
    resizeMode: 'contain',
  }
});

export default SearchScreen;