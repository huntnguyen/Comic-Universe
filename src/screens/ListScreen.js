import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, ImageBackground } from 'react-native';
import { Context as ListContext } from '../context/ListContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bg from '../../assets/comicbg.gif'

const ListScreen = (props) => {
    const { state, deleteList } = useContext(ListContext);
    
    return (
      <View style={styles.root}>
        <ImageBackground 
          style={styles.container} 
          imageStyle={styles.image} 
          source={bg} 
          resizeMode='cover'
        >
          <Text style={styles.title}>Current Lists</Text>
          <FlatList 
            data={state}
            keyExtractor={(list) => list.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity 
                  onPress={() => {
                    props.navigation.navigate('Show', { id: item.id });
                  }}
                >
                  <View style={styles.listContainer}>
                    <Text style={styles.listText}>{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteList(item.id)}>
                      <Feather name="trash" style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ImageBackground>
      </View>
    );
  };

ListScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('Create');
      }}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
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
    opacity: .5
  },
  text2: {
    fontSize: 50,
    color: 'gold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  listText: {
    fontSize: 18,
    color: 'black',
  },
});

export default ListScreen;
