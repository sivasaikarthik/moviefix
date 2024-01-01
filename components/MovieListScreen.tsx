import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import colors from '../styles/Colors';
import { Movie } from '../interfaces/MovieInterface';
import { MovieScreenProps } from '../interfaces/MovieScreenProps';

const { width, height } = Dimensions.get('window');

const MovieScreen: React.FC<MovieScreenProps> = ({ movieData, year }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  // console.log("inside movie screen",year, movieData)
  const renderMovieItems = () => {
    return movieData.map((item, index) => {
      const imageUrl = `${baseUrl}${item.poster_path}`;

      return (
        <View key={index} style={styles.movieItemContainer}>
          <ImageBackground
            style={styles.movieItem}
            source={{ uri: imageUrl }}
            resizeMode="cover"
          >
            <View style={styles.titleContainer}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieRating}>{item.vote_average}</Text>
            </View>
          </ImageBackground>
        </View>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>{year}</Text>
      <View style={styles.movieGrid}>{renderMovieItems()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 16,
    color: '#fff',
    paddingLeft: 16,
  },
  movieGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  movieItemContainer: {
    width: width / 2 - 20,
    height: height / 3,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  movieItem: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titleContainer: {
    paddingBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  movieRating: {
    marginTop: 8,
    color: 'white',
  },
});

export default MovieScreen;
