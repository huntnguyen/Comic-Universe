{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
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
           <Text style={styles.textHeader}>Current List</Text>
        </View>

        <View style={styles.info1}>
           <Text style={styles.text1}>MOST RECENT ADDED COMICS: </Text>
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

       
        {/* functional buttons: "Add Friends", "Favourite List", "Favourite Comics" */}
        <View style={styles.screenButtons}>
            <View style={styles.button1}>
            <Button 
            title = {"Create List"} 
            color="cyan"
            onPress={() => props.navigation.navigate('HomeScreen')}
            />
            </View>
            <View style={styles.button1}>
            <Button 
            title = {"View User's List"} 
            color="cyan"
            onPress={() => props.navigation.navigate('HomeScreen')}
            />
            </View>

            <View style={styles.button1}>
            <Button 
            title = {"View Comics"} 
            color="cyan"
            onPress={() => props.navigation.navigate('HomeScreen')}
            />
            </View>
        </View>
        
       {/* Navigation buttons: "Home", "List", "Profile" */}
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
    flex: 1, 
    backgroundColor: 'black',
  },
  image: {
    opacity: .5
  },
  header:{
    justifyContent: "center",
    alignItems: 'center',
    textAlign: "center"

  },
  text1: {
    textAlign: 'left', 
    fontSize: 20, 
    fontWeight: '800', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 3,
    textAlign: 'left',
  },
  text: {
    textAlign: 'left', 
    fontSize: 15, 
    fontWeight: '800', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 6,
    textAlign: 'left',
  },
  textHeader: {
    textAlign: 'center', 
    fontSize: 55, 
    fontWeight: '800', 
    color: 'yellow',
    textShadowColor: 'tan', 
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
    height: 300
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
