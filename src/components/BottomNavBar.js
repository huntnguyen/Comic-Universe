import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

const BottomNavBar = ({ navigation }) => {
  const navigateToWelcomeScreen = () => {
    navigation.navigate('Character');
  };
  const navigateToSearchScreen = () => {
    navigation.navigate('Search');
  };
  const navigateToProfileScreen = () => {
    navigation.navigate('Profile');
  };
  const navigateToCreateListScreen = () => {
    navigation.navigate('CreateList');
  };

  return (
    <ImageBackground
      source={require('../../assets/comicbookdots.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToWelcomeScreen} style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSearchScreen} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToCreateListScreen} style={styles.button}>
          <Text style={styles.buttonText}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToProfileScreen} style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = {
  backgroundImage: {
    height: 50,
    resizeMode: 'cover',
    backgroundColor: '#224878',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
};

export default withNavigation(BottomNavBar);