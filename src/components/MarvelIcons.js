import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from "react-native";
import axios from "axios"
import API from "../api/API"

const { width } = Dimensions.get('window');

const MarvelIcons = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const searchApi = async function(name){
    try{
        axios 
        const response = await API.get(`https://comicvine.gamespot.com/api/characters/?api_key=3a531bfb45a299035190b4b0860d42972ddd2de8&filter=name:${name}&format=json`, {
          params: {
           format: "json",
           api_key: "3a531bfb45a299035190b4b0860d42972ddd2de8",
           limit: 10
          }
      });
      setResults(response.data.results);
      // console.log(results);
   }
    catch(e){
      console.log(e, "error");
    }
  }

  return (
    <View style={{flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-between"}}>
      <TouchableOpacity activeOpacity={0.5} onPress = {function(){searchApi("spiderman"); props.navigation.navigate("ResultScreen", {results: [results]})}}>
      
        <View style={{ width: width/3 }}>
          <Image style={styles.image} source={require('../../assets/spiderman.png')} resizeMode={'stretch'} />
        </View> 
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/hulk.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/wolverine.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/ironman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/thor.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/captainamerica.png')} resizeMode={'stretch'} />
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

export default MarvelIcons;