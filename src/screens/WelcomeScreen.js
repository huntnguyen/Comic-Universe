import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";



const WelcomeScreen = (props) => {

  return (
    <View style = {styles.root}>

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        <Text style={styles.text}>Comics {"\n"} Universe</Text>
        <Images style = {styles.image2} imageSource={require('../../assets/superhero.png')}/>
        <View style={styles.button}>
        <Button 
          title = {"Create Account"} 
          color="white"
          onPress={() => props.navigation.navigate('CreateAccount')}
        />
        </View>
        <View style={styles.button}>
        <Button 
          title = {"Login"} 
          color="white"
          onPress={() => props.navigation.navigate('Login')}
        />
        </View>
        <View style={styles.button}>
        <Button 
          title = {"Continue without account"} 
          color="white"
          onPress={() => props.navigation.navigate('Character')}
        />
        </View>
        
      </ImageBackground>
    </View>
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
    height: 800,
    width: 700,
  },
  text: {
    textAlign: 'center', 
    fontSize: 55, 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 30,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: 'white',
    elevation: 3,
    backgroundColor: '#224878',
    color: 'red',
    width: 375,
    height: 100,
    marginBottom: 10
  },
  image2: {
    marginBottom: 20,
  }
});

export default WelcomeScreen;
