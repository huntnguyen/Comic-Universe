{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";

{/* main component: UserListScreen */}
const UserListScreen = (props) => {

  return (
    <View style = {styles.root}>
      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        
        {/* header */}
        <View style={styles.header}>
             <Text style={styles.text1}>User List</Text>
        </View>

        {/* header info */}
        <Text style={styles.text}>TOP RATED USER LISTINGS:</Text>
        <View style={styles.rating}>
             <Text style={styles.text}>Ratings: ⭐⭐⭐⭐⭐</Text>
        </View>

        {/* user listings */}
        <View>
            <Text style={styles.text}> Heromachi List:</Text>
            <View style= {styles.userList}></View>
            <Text style={styles.text}> Joekadama List:</Text>
            <View style= {styles.userList}></View>
            <Text style={styles.text}> Eddygudo List:</Text>
            <View style= {styles.userList} ></View>
            <Text style={styles.text}> CyberGla23 List:</Text>
            <View style= {styles.userList} ></View>
        </View>

        {/* main navigation buttons */}
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
              title = {"HOME"} 
              color="gold"
              onPress={() => props.navigation.navigate('Home')}
              />
            </View>
            <View style={styles.button}>
              <Button 
              title = {"LIST"} 
              color="gold"
              onPress={() => props.navigation.navigate('CreateList')}
              />
            </View>
            <View style={styles.button}>
              <Button 
              title = {"PROFILE"} 
              color="gold"
              onPress={() => props.navigation.navigate('Profile')}
              />
            </View>
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
    height: 830,
    backgroundColor: 'black',
  },
  header:{
    marginTop: 30,
    marginBottom: 20
  },
  rating:{
    marginBottom: 10
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

  text1: {
    textAlign: 'center', 
    fontSize: 55, 
    fontWeight: 'bold', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginTop: 20,
    marginBottom: 20
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
  userList: {
    width: 400,
    height: 85
  },
  buttonContainer:{
    flexDirection: 'row'
  }
});

export default UserListScreen;
