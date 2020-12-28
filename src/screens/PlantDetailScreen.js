import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlantDetailScreen = ({route, ...props}) => {
  console.log('====================================');
  console.log('route params', route.params);
  console.log('====================================');

  const {
    plantFamily,
    plantFamilyCommonName,
    plantScientificName,
    plantImageUrl,
    plantYear,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text>Family: {plantFamily}</Text>
      <Text>Scientific name: {plantScientificName}</Text>
      <Text>Family common name: {plantFamilyCommonName}</Text>
      <Image source={{uri: plantImageUrl}} style={styles.image} />

      <View style={styles.plantBiography}>
        <Text>This plant was first officially recorded in {plantYear}.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: windowWidth * 0.04,
    marginTop: windowHeight * 0.02,
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.35,
    marginTop: windowHeight * 0.01,
    borderRadius: 7,
  },
  text: {
    color: '#005031',
    fontSize: 20,
    fontWeight: 'bold',
  },
  plantBiography: {
    marginTop: windowHeight * 0.02,
  },
});

export default PlantDetailScreen;
