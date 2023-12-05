{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image} from "react-native";
import bg from '../../assets/comicbg.gif'
import comicbg from '../../assets/comicbg3.jpeg'
import BottomNavBar from "../components/BottomNavBar";
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
      <MarvelIcons navigation={props.navigation}/>
      <DCIcons navigation={props.navigation}/>
      </View>
      <BottomNavBar/>
    </ImageBackground>
  );
};

{/* stylesheets */}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60
  },
  backgroundImage: {
    flex: 1, 
    width: 100, 
    height: 75, 
    resizeMode: 'contain',
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  image2:{
    width: 100,
    height: 100,
    resizeMode: 'contain' 
  },
  image3:{
    width: 450,
    height: 500,
    marginTop: 20,
    resizeMode: 'contain'
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox:{
    margin: 1,
    padding: 25,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 1,
    backgroundColor: '#224878'
  },
});

export default CharacterScreen;
