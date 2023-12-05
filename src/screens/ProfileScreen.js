{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import BottomNavBar from "../components/BottomNavBar";
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
                <Text style={styles.text}>User: VenomFan1 </Text>
                <Text style={styles.text}>Ratings: ⭐</Text>
                <Text style={styles.text}>Followers: 1 </Text>
                <Text style={styles.text}>Following: 999 </Text>
            </View> 
        </View>

        <View><TouchableOpacity><Text style={styles.text}>                     Edit Photo  ⏏️</Text></TouchableOpacity></View>

        {/* functional buttons: "Add Friends", "Favourite List", "Favourite Comics" */}
        <View style={styles.screenButtons}>
            <View style={styles.button1}>
            <Button 
            title = {"Create List"} 
            color="white"
            onPress={() => props.navigation.navigate('CreateList')}
            />
            </View>

            <View style={styles.button1}>
            <Button 
            title = {"View My Lists"} 
            color="white"
            onPress={() => props.navigation.navigate('CurrentList')}
            />
            </View>

            <View style={styles.button1}>
            <Button 
            title = {"Sign Out"} 
            color="white"
            onPress={() => props.navigation.navigate('Welcome')}
            />
            </View>
        </View>
        <View>
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
    height: 700,
    width: 700,
    justifyContent: "center",
    resizeMode: "contain"
  },
  header:{
    justifyContent: "center",
    alignItems: 'center',
    textAlign: "center"

  },
  text: {
    fontSize: 15, 
    fontWeight: '800', 
    color: 'white', 
    textShadowRadius: 30,
    marginBottom: 40,
    textAlign: 'left',
  },
  textHeader: {
    textAlign: 'center', 
    fontSize: 55, 
    fontWeight: '800', 
    color: 'white', 
    textShadowRadius: 30,
    marginBottom: 10,
    marginTop: 20,
  },

  info:{
    flexDirection: 'row',
    flex: 1,
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'white',
    elevation: 3,
    backgroundColor: '#224878',
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
    width: 100,
    height: 100,
  },
  image2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 10, 
    height: 10,
  },
  screenButtons:{
    marginBottom: 40,
    alignItems: 'center',
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'white',
    elevation: 3,
    backgroundColor: '#224878',
    color: 'red',
    width: 190,
    height: 60,
    marginBottom: 10,
    color: 'red'
  },
});

export default ProfileScreen;
