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
            title={"Create an Account"}
            color="gold"
            onPress={handleCreateAccount}
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
