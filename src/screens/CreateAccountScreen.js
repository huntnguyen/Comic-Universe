{/* imports */}
import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
import Images from "../components/Images";

{/* main component: CreateAccontScreen */}
const CreateAccountScreen = (props) => {

  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleCreateAccount = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|])(?=.*[a-zA-Z]).{5,}$/;

    if (!passwordRegex.test(password)) {
      alert("Password should be at least 5 characters long with a special character and a number.");
      return;
    }

    if (password !== reEnteredPassword) {
      alert("Passwords do not match. Please re-enter the same password.");
      return;
    }
    
    props.navigation.navigate('Profile', { username });
  }

  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.image}
        source={bg}
        resizeMode='cover'
      >
        <Text style={styles.text}>Create{"\n"}Account</Text>

        <Images style={styles.image2} imageSource={require('../../assets/superhero.png')} />

        <View style={styles.textInputs}>
          <TextInput
            placeholder="Enter New Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.textInputs}>
          <TextInput
            placeholder="Enter New Password"
            //secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.textInputs}>
          <TextInput
            placeholder="Re-enter New Password"
            //secureTextEntry
            value={reEnteredPassword}
            onChangeText={(text) => setReEnteredPassword(text)}
          />
        </View>

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
    width: 175,
    height: 75,
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
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#224878',
    elevation: 3,
    backgroundColor: '#fff',
    color: 'red',
    width: 375,
    height: 100,
    marginBottom: 10,
    color: 'red'
  },
});

export default CreateAccountScreen;
