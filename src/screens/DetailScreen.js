import React from "react";
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground} from "react-native";
import bg from '../../assets/comicbg.gif'

const DetailScreen = (props) => {
  const item = props.navigation.getParam("item");
  const fixDescription = item.description
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');

  return (

    <View style = {styles.root}>

    <ImageBackground
      style = {styles.container}
      imageStyle={styles.image}
      source = {bg}
      resizeMode = 'cover'
    >
    <ScrollView>
      <View style={styles.root2}>
        <View style={styles.centeredContainer}>
         
          <Image
            source={{uri: item.image.original_url}}
            style={styles.image2}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.name2}>Title: </Text> 
          <Text>{item.name}{"\n"}</Text>
          <Text style={styles.name2}>Description: </Text> 
          <Text>{fixDescription}{"\n"}</Text>

          <Text style={styles.name2}>Cover Date:</Text> 
          <Text>{item.cover_date}{"\n"}</Text>

          <Text style={styles.name2}>Issue Number:</Text> 
          <Text>{item.issue_number}{"\n"}</Text>

          <Text style={styles.name2}>More Info on Comic: </Text> 
          <Text>{item.site_detail_url}{"\n"}</Text>
        </View>
      </View>
    </ScrollView>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root2: {
    flex: 1,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  box: {
    backgroundColor: 'tan',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  image2: {
    width: 400,
    height: 600,
  },
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
  name2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
});

export default DetailScreen;