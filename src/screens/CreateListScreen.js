{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import BottomNavBar from "../components/BottomNavBar";
import Images from "../components/Images";

{/* main component: CreateListScreen */}
const CreateListScreen = (props) => {

  return (
    <View style = {styles.root}>

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        {/* header */}
        <Text style={styles.text}>Create{"\n"} New List</Text>

        {/* text input sections */}
        <View><Text style={styles.text1}>Enter List Name:</Text></View>
        <View style={styles.button2}>
            <TextInput placeholder="List Name"/>
        </View>
        <View><Text style={styles.text1}>Enter List Description:</Text></View>
        <View style={styles.button1}>
            <TextInput placeholder="List Description"/>
        </View>

        {/* add comic tabs*/}
        <View style = {styles.button}>
        <Button 
            title = {"Add Comics"} 
            color="white"
            onPress={() => props.navigation.navigate('Search')}
          />
        </View>
        {/* main button: Add New List */}
        <View style={styles.button}>
          <Button 
            title = {"Add New List"} 
            color="white"
            onPress={() => props.navigation.navigate('CurrentList')}
          />
        </View>
      <BottomNavBar/>  
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
  text1: {
    textAlign: 'left', 
    fontSize: 19, 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 30,
    marginBottom: 5
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
    width: 393,
    height: 100,
    marginBottom: 10
  },
  image2: {
    marginBottom: 20,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: '#224878',
    elevation: 3,
    backgroundColor: 'lightcyan',
    color: 'red',
    width: 393,
    height: 150,
    marginBottom: 15,
    color: 'red'
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: '#224878',
    elevation: 3,
    backgroundColor: 'lightcyan',
    color: 'red',
    width: 393,
    height: 50,
    marginBottom: 57,
    
  },
  comiclist:{
    backgroundColor: "white",
    width: 80,
    height: 60,
    marginBottom: 1,
    borderWidth: 3,
    borderColor: 'white',
    marginHorizontal: 3

  },
  comiclistcontainer:{
    flexDirection: 'row',
    marginBottom: 2,
    marginTop: 3
  }

});

export default CreateListScreen;
