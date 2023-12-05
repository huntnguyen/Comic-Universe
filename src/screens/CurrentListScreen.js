{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import BottomNavBar from "../components/BottomNavBar";
import Images from "../components/Images";


{/* main component: CurrentListScreen */}
const CurrentListScreen = (props) => {

  return (
    <View style = {styles.root}>
      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        {/* header name */}
        <View style={styles.header}>
           <Text style={styles.textHeader}>List Name: Current List</Text>
        </View>
        <View style={styles.listings}>
            <View style={styles.info}>
                <Text style={styles.text}>1. SteelWorks </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>2. Detective Comics #1078 </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>3. Alan Scott: The Green Lantern #2 </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>4. Amazons Attack #2</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>5. Batman Beyond: Neo-Gothic #5  </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>6. Aquaman and the Lost Kingdom </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>7. Batman / Catwoman: The Gotham War - Scorecheram </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>8. The Return of Superman 30th Anniversary </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>9. Superman VS. Meshi #11 </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>10. Supergirl Special #1 </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>11. Justice League VS. Godzilla VS. Kong </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>...</Text>
            </View>
            
        </View>
      <BottomNavBar/>
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
    flex: 1, 
    backgroundColor: 'black',
  },
  image: {
    height: 800,
    width: 700,
  },
  text1: {
    textAlign: 'left', 
    fontSize: 20, 
    fontWeight: '800', 
    color: 'white',
    marginBottom: 3,
    textAlign: 'left',
  },
  text: {
    textAlign: 'left', 
    fontSize: 15, 
    fontWeight: '800', 
    color: 'white',
    textShadowRadius: 30,
    marginBottom: 6,
    textAlign: 'left',
  },
  textHeader: {
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: '800', 
    color: 'white', 
    textShadowRadius: 30,
    marginBottom: 10,
    marginTop: 50,
  },

  info1:{
    flexDirection: 'row',
    marginTop: 10,
  },
  info:{
    marginTop: 3,
  },
  listings:{
    height: 603
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
  buttonContainer:{
    flexDirection: 'row'
  },
  image1: {
    marginBottom: 5,
    width: 10,
    height: 10,
    resizeMode: 'cover',
  },
  screenButtons:{
    marginBottom: 10,
    marginTop: 25,
    alignItems: '',

  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: '#113',
    color: 'red',
    width: 190,
    height: 60,
    marginBottom: 12,
    color: 'red'
  },
});

export default CurrentListScreen;
