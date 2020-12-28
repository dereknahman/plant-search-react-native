import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import useResults from '../hooks/useResults';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const {searchApi, errorMessage, results} = useResults();

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

        <TouchableOpacity style={styles.button} onPress={() => searchApi(term)}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>{item.common_name}</Text>
              <Text>Family: {item.family}</Text>
              <Text>Scientific name: {item.scientific_name}</Text>
              <Image source={{uri: item.image_url}} style={styles.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    marginHorizontal: '5%',
  },
  header: {
    marginBottom: '5%',
  },
  text: {
    color: '#005031',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#dddddd',
    width: 300,
    height: 40,
    borderRadius: 5,
    borderColor: '#005031',
    borderWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#005031',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '98%',
    height: 230,
    marginTop: 5,
  },
  listContainer: {
    marginTop: 20,
    width: '100%',
  },
  listItem: {
    marginTop: 10,
  },
});

export default HomeScreen;
