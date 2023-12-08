import React from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, TouchableOpacity, ScrollView,} from "react-native";

const DetailScreen = (props) => {
  const item = props.navigation.getParam("item");

  return (
    <ScrollView >
      <View style = {styles.root}>
        {/* <Text>Hello Detail Screen</Text> */}
        <Text>Name: {item.name}</Text>
        <Image source={{ uri: item.image.original_url }}
              style={{ width: 300, height: 500 }}  />
        <Text></Text>
        <Text>Description: {item.description}</Text>
        <Text></Text>
        <Text>Cover Date: {item.cover_date}</Text>
        <Text></Text>
        <Text>Issue Number: {item.issue_number}</Text>
      </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default DetailScreen;