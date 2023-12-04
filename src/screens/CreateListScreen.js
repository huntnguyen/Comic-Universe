{/* imports */}
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import bg from '../../assets/comicbg.gif'
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
            <TextInput placeholder="Enter New Username"/>
        </View>
        <View><Text style={styles.text1}>Enter List Description:</Text></View>
        <View style={styles.button1}>
            <TextInput placeholder="Enter New Password"/>
        </View>

        {/* add comic tabs*/}
        <View><Text style={styles.text1}>Add Comics:</Text></View>
        <View style= {styles.comiclistcontainer} >
            <View style = {styles.comiclist}><Text>  Comic 1  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 2  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 3  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 4  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 5  </Text></View>
        </View>
        <View style= {styles.comiclistcontainer} >
            <View style = {styles.comiclist}><Text>  Comic 6  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 7  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 8  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 9  </Text></View>
            <View style = {styles.comiclist}><Text>  Comic 10  </Text></View>
        </View>

        {/* main button: Add New List */}
        <View style={styles.button}>
          <Button 
            title = {"Add New List"} 
            color="gold"
            onPress={() => props.navigation.navigate('CurrentList')}
          />
        </View>
        
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
  text1: {
    textAlign: 'left', 
    fontSize: 19, 
    fontWeight: 'bold', 
    color: 'yellow',
    textShadowColor: 'tan', textShadowRadius: 30,
    marginBottom: 5
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
    width: 430,
    height: 100,
    marginBottom: 5,
    marginTop: 20,

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
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: 'lightcyan',
    color: 'red',
    width: 425,
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
    borderColor: 'yellow',
    elevation: 3,
    backgroundColor: 'lightcyan',
    color: 'red',
    width: 427,
    height: 50,
    marginBottom: 15,
    
  },
  comiclist:{
    backgroundColor: "lightyellow",
    width: 80,
    height: 60,
    marginBottom: 1,
    borderWidth: 3,
    borderColor: 'yellow',
    marginHorizontal: 3

  },
  comiclistcontainer:{
    flexDirection: 'row',
    marginBottom: 2,
    marginTop: 3
  }

});

export default CreateListScreen;
