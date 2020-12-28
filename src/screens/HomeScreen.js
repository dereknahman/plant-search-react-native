import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import useResults from '../hooks/useResults';
import {Keyboard} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const {searchApi, errorMessage, results} = useResults();
  // TODO: handle errors properly

  console.log('====================================');
  console.log(results);
  console.log('====================================');

  const apiSearchHandler = () => {
    searchApi(term);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Which plant can we help you find?</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for your favourite plant"
          onChangeText={(text) => setTerm(text)}
          value={term}
        />

        <TouchableOpacity style={styles.button} onPress={apiSearchHandler}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PlantDetail', {
                  plantName: item.common_name,
                  plantFamily: item.family,
                  plantScientificName: item.scientific_name,
                  plantImageUrl: item.image_url,
                  plantYear: item.year,
                })
              }>
              <View style={styles.listItem}>
                <Text style={styles.text}>{item.common_name}</Text>
                <Text>Family: {item.family}</Text>
                <Text>Scientific name: {item.scientific_name}</Text>
                <Image source={{uri: item.image_url}} style={styles.image} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: windowWidth * 0.04,
    marginTop: windowHeight * 0.04,
  },
  header: {
    marginBottom: windowHeight * 0.01,
  },
  text: {
    color: '#005031',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#dddddd',
    width: windowWidth * 0.71,
    height: windowHeight * 0.04,
    borderRadius: 2,
    borderColor: '#005031',
    borderWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.88,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#005031',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.16,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.25,
    marginTop: windowHeight * 0.01,
    borderRadius: 7,
  },
  listContainer: {
    marginTop: windowHeight * 0.005,
    width: windowWidth * 0.9,
  },
  listItem: {
    marginTop: windowHeight * 0.02,
  },
});

export default HomeScreen;
