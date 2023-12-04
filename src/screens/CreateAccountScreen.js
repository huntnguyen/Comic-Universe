{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";

{/* main component: CreateAccontScreen */}
const CreateAccountScreen = (props) => {

  return (
    <View style = {styles.root}>
      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        {/* Header */}
        <Text style={styles.text}>Create{"\n"} Account</Text>
        
        {/* homepage picture */}
        <Images style = {styles.image2} imageSource={require('../../assets/superhero.png')}/>

        {/* text inputs */}
        <View style={styles.textInputs}>
           <TextInput placeholder="Enter New Username"/>
        </View>
        <View style={styles.textInputs}>
           <TextInput placeholder="Enter New Password"/>
        </View>

        {/* main button */}
        <View style={styles.button}>
          <Button 
            title = {"Create an Account"} 
            color="gold"
            onPress={() => props.navigation.navigate('Profile')}
          />
        </View>
        
      </ImageBackground>
    </View>
  );
  
};

{/* stylesheet */}
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
    fontSize: 55, 
    fontWeight: 'bold', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: 'blue',
    color: 'red',
    width: 400,
    height: 100,
    marginBottom: 10
  },
  image2: {
    marginBottom: 20,
  },
  textInputs: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: '#fff',
    color: 'red',
    width: 400,
    height: 100,
    marginBottom: 10,
    color: 'red'
  },
});

export default CreateAccountScreen;
