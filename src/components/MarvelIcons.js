import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const DCIcons = (props) => {
  return (
    <View style={{flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-between"}}>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3 }}>
          <Image style={styles.image} source={require('../../assets/spiderman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/hulk.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/wolverine.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/ironman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/thor.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/captainamerica.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20
  }
});

export default DCIcons;