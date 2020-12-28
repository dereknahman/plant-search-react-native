// import React from 'react';
// import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
// import useResults from '../hooks/useResults';

// const ResultList = () => {
//   const {results} = useResults();

//   return (
//     <View style={styles.listContainer}>
//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({item}) => (
//           <View style={styles.listItem}>
//             <Text style={styles.text}>{item.common_name}</Text>
//             <Text>Family: {item.family}</Text>
//             <Text>Scientific name: {item.scientific_name}</Text>
//             <Image source={{uri: item.image_url}} style={styles.image} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   listItem: {
//     marginTop: 10,
//   },
//   text: {
//     color: '#005031',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   listContainer: {
//     marginTop: 20,
//     width: '100%',
//   },
//   image: {
//     width: '98%',
//     height: 230,
//     marginTop: 5,
//     borderRadius: 7,
//   },
// });

// export default ResultList;
