import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const DCIcons = (props) => {
  return (
    <View style={{flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-between"}}>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3 }}>
          <Image style={styles.image} source={require('../../assets/batman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/superman.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/Wonderwoman.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/flash.png')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/aquaman.webp')} resizeMode={'stretch'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={{ width: width/3}}>
          <Image style={styles.image} source={require('../../assets/greenlantern.png')} resizeMode={'stretch'} />
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
    marginTop: 10
  }
});

export default DCIcons;