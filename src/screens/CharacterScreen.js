{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image} from "react-native";
import bg from '../../assets/comicbg.gif'
import DCIcons from "../components/DCIcons";
import MarvelIcons from "../components/MarvelIcons";

{/* main conmponent: CharacterScreen */}
const CharacterScreen =(props) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.image}
      source={bg}
      resizeMode='cover'
    >
      {/* header info text */}
      <View style={styles.textBox}>
        <Text style={styles.text}>
          Choose a character to read about
        </Text>
      </View>
      
      {/* body display images */}
      <View style={styles.center}>
        <Image style ={styles.image2} source={require('../../assets/marvellogo.png')}/>
        <MarvelIcons />
        <Image style={styles.image3} source={require('../../assets/dclogo.png')}/>
        <DCIcons />
      </View>
    </ImageBackground>
  );
};

{/* stylesheets */}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  image:{
    opacity: .5
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: 'gold',
    textShadowRadius: 20,
  },
  image2:{
    width: 200,
    height: 100,
    marginTop: 20,
  },
  image3:{
    width: 150,
    height: 150,
    marginTop: 20,
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox:{
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 10,
    backgroundColor: "blue"
  }
});

export default CharacterScreen;
