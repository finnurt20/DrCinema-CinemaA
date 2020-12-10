import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const GenreGetter = ({item}) => {
  var genres = ""
  for (let i=0; i<item.length;i++){
    genres = genres.concat(item[i].Name+ "   ")
  }
  return genres
};

const Item = ({ item, onPress }) => (

  <TouchableOpacity
    style={styles.item}
    onPress={onPress}>
    <View style={styles.itemView}>
      <View>
        <Image
          style={styles.poster}
          source={{ uri: item.poster}}
        />
      </View>
      <View style={styles.textt}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.movieText}>Útgáfuár: {item.year}</Text>
        <Text style={styles.movieText}><GenreGetter item={item.genres}/></Text>
      </View>
    </View>
  </TouchableOpacity>
);

const CinemaDetailList = ({movies, cinemaDetails, navigation: { navigate }}) => {
  const renderItem = ({ item }) => {
  //console.log(movies)
  return(
    <Item
      item={item}
      onPress={() => navigate('movieDetailScreen', {movieDetails: item, cinemaDetails: cinemaDetails})}
    />
    );
  }
  return (

  <SafeAreaView style={styles.container}>
    <FlatList
      ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text >No movies Found</Text>
          </View>
        )}
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  </SafeAreaView>
);
};


export default withNavigation(CinemaDetailList);
