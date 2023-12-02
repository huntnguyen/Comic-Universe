{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";

{/* imports */}
const CharacterDetailScreen = (props) => {

  return (
    <View style = {styles.root}>
      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        {/* info header section: comic photo & stats */}
        <View style={styles.info}>
            <View>
                <Text style={styles.text}> Name: Batman</Text>
                <Text style={styles.text}> Ratings: ⭐⭐⭐⭐</Text>
                <Text style={styles.text}> Users: 1978223 </Text>
                <Text style={styles.text}> Lists: 94</Text>
            </View>
            <View>
                <Images style = {styles.image2} imageSource={require('../../assets/batman1.png')}/>
            </View>
        </View>
       
       {/* info and recommendation section */}
        <View>
            <Text style={styles.text}> Comic User Recommends:</Text>
            <View style= {styles.list}></View>
            <Text style={styles.text}> Popular Comics:</Text>
            <View style= {styles.list}></View>
            <Text style={styles.text}> Users List:</Text>
            <View style= {styles.list} ></View>
        </View>

        {/* main navigation buttons: "Home", "List", "Profile" */}
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button 
                title = {"HOME"} 
                color="gold"
                onPress={() => props.navigation.navigate('HomeScreen')}
                />
            </View>
            <View style={styles.button}>
                <Button 
                title = {"LIST"} 
                color="gold"
                onPress={() => props.navigation.navigate('HomeScreen')}
                />
            </View>
            <View style={styles.button}>
                <Button 
                title = {"PROFILE"} 
                color="gold"
                onPress={() => props.navigation.navigate('HomeScreen')}
                />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
  
};

{/* StyleSheet */}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    height: 830,
    backgroundColor: 'black',
  },
  image: {
    opacity: .5
  },
  text: {
    textAlign: 'left', 
    fontSize: 20, 
    fontWeight: '800', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 10,
    textAlign: 'left',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: 'blue',
    color: 'red',
    width: 140,
    height: 100,
    marginBottom: 20,
    textAlign: 'center'
  },
  image2: {
    marginBottom: 5,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  button1: {
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
  info:{
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
  },
  list: {
    width: 400,
    height: 100
  },
  buttonContainer:{
    flexDirection: 'row'
  }
});

export default CharacterDetailScreen;
