import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Entypo} from '@expo/vector-icons';



const SearchBar = (props) => {
  return <View style={styles.background}>
    <Entypo style = {styles.magnifyingGlass} size = {30} name = "magnifying-glass" />
    <TextInput 
      placeholder = "Search Here" 
      style = {styles.inputStyle} 
      value = {props.searchTerm}
      autoCapitalize = 'none'
      autoCorrect = {false}
      onChangeText = {function(newTerm){props.onTermChange(newTerm)}}
      onEndEditing = {function(){props.onSearchTermSubmit() }}
    />
    </View>
}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#cccccc',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  magnifyingGlass: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 10,

  }
});

export default SearchBar;