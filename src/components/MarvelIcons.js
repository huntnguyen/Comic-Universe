import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from "react-native";
import axios from "axios"
import API from "../api/API"
const { width } = Dimensions.get('window');

const DCIcons = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const imageResults = async function (image) {
    try {
      const response = await API.get(
        `http://comicvine.gamespot.com/api/issues/?api_key=5e30e068623ccb54a850a711b739bbcdf34afa3b&filter=image:${image}&field_list=image`,
        {
          params: { format: "json", api_key: "5e30e068623ccb54a850a711b739bbcdf34afa3b" }
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
          api_key: "5e30e068623ccb54a850a711b739bbcdf34afa3b", 
          limit: 15 
        }
        }
      );
      setResults(response.data.results);
      response.data.results.forEach((issue) => {
        imageResults(issue.image.original_url);
      });
      // Navigate to ResultScreen with results on the first click
      props.navigation.navigate("ResultScreen", { results: response.data.results });
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-between" }}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("iron man")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/ironman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("wolverine")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/wolverine.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("black panther")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/blackpanther.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("captain america")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/captainamerica.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("deadpool")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/deadpool.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => searchApi("spiderman")}
      >
        <View style={{ width: width / 3 }}>
          <Image style={styles.image} source={require('../../assets/spiderman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20
  }
});


export default DCIcons;