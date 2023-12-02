{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";


{/* main component: ProfileScreen */}
const ProfileScreen = (props) => {

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
           <Text style={styles.textHeader}>Profile</Text>
        </View>

        {/* profile's photo and info */}
        <View style={styles.info}>
            <View>
                <Images style = {styles.image1} imageSource={require('../../assets/profilepic.png')}/>
            </View>
            <View>
                <Text style={styles.text}>User: Heromachi </Text>
                <Text style={styles.text}>Ratings: ⭐⭐⭐</Text>
                <Text style={styles.text}>Followers: 223 </Text>
                <Text style={styles.text}>Total List: 94</Text>
            </View> 
        </View>

        <View><TouchableOpacity><Text style={styles.text} >                 Edit Photo  ⏏️ </Text></TouchableOpacity></View>

        {/* functional buttons: "Add Friends", "Favourite List", "Favourite Comics" */}
        <View style={styles.screenButtons}>
            <View style={styles.button1}>
            <Button 
            title = {"Add Friends"} 
            color="cyan"
            onPress={() => props.navigation.navigate('HomeScreen')}
            />
            </View>

            <View style={styles.button1}>
            <Button 
            title = {"Favourite List"} 
            color="cyan"
            onPress={() => props.navigation.navigate('HomeScreen')}
            />
            </View>

            <View style={styles.button1}>
            <Button 
            title = {"Favourite Comics"} 
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
  text: {
    textAlign: 'left', 
    fontSize: 20, 
    fontWeight: '800', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 40,
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
    marginTop: 20,
  },

  info:{
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
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
    marginBottom: 40

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
    marginBottom: 10,
    color: 'red'
  },
});

export default ProfileScreen;
