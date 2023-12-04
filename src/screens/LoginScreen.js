import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";
import { TextInput } from "react-native-gesture-handler";

//mike: testing for file update

const LoginScreen = (props) => {

  //user credentials
  const [ username , setUserName ] = useState("");
	const [ password , setPassword ] = useState("");
	const [  errors  , setErrors   ] = useState({});

  //major function to validate user entry
	const validateForm = ()=> {
		let errors = {}

		if (!username) errors.username = "username is required"; 
		if (!password) errors.password = "password is required"; 

		return Object.keys(errors).length === 0;
	}

  //handler submit function
  /*
	const handleSubmit = () => {
        if(validateForm()){
        props.navigation.navigate("Home")
        console.log("Submitted", username, password);
        setUsername("");
        setPassword("");
        setErrors({});
		  }
		}
	*/

  return (
    <View style = {styles.root}>

      <ImageBackground
        style = {styles.container}
        imageStyle={styles.image}
        source = {bg}
        resizeMode = 'cover'
      >
        <Text style={styles.text}>Login {"\n"} Screen</Text>
        <Images style = {styles.image2} imageSource={require('../../assets/superhero.png')}/>

       
        <View style={styles.button1}>
        <TextInput placeholder="Enter your username"
                   value={username}
				           onChangeText={setUserName}/>
        { errors.username ? <Text style = {styles.errorText}>errors.password</Text> : null }
        </View>

        <View style={styles.button1}>
        <TextInput placeholder="Enter your password"
                    secureTextEntry
                    value = {password}
                    onChangeText={setPassword}/>
        { 	errors.username ? <Text style = {styles.errorText}>errors.username</Text> : null  }
        </View>

        <View style={styles.button}>
        <Button 
          title = {"Login"} 
          color="gold"
          onPress={() => ( props.navigation.navigate("Character") )} />

          {/*  onPress={() => props.navigation.navigate('HomeScreen')} */}
        </View>
        
        
      </ImageBackground>
    </View>
  )
};
{/*<KeyboardAvoidingView behavior="padding" 
		                      style={style.container}
		                      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} >*
</KeyboardAvoidingView>*/}

{/*********** Authemtication ends  *******************/}


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
  image2: {
    marginBottom: 20,
  }
});

export default LoginScreen;
