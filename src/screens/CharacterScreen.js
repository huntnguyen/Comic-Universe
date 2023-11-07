import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";

const CharacterScreen = (props) => {

  return (
    

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        <Text style={styles.text}>Choose a character to read about</Text>
        <Image style = {styles.image2} source={require('../../assets/marvellogo.png')}/>
        <Image style = {styles.image3} source={require('../../assets/dclogo.png')}/>
       
      </ImageBackground>
    
  );
  
};


const styles = StyleSheet.create({
    root: {
        flex: 1
      },
      container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      image: {
        opacity: .5
      },
      text: {
        textAlign: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'yellow',
        textShadowColor: 'tan', textShadowRadius: 30,
      },
      image2: {
        marginBottom: 20,
        width: 200,
        height: 100
      },
      image3: {
        marginBottom: 20,
        width: 150,
        height: 150
      }
});

export default CharacterScreen;