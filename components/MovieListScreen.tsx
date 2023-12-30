import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import colors from '../styles/Colors';
import {Movie} from '../interfaces/MovieInterface';

const {width, height} = Dimensions.get('window');

interface MovieScreenProps {
  movieData: Movie[];
  year: number;
}
const MovieScreen: React.FC<MovieScreenProps> = ({movieData, year}) => {
  const renderMovieItems = () => {
    return movieData.map((item, index) => (
      <ImageBackground
        key={index}
        style={styles.movieItem}
        source={{uri: colors.image}}>
        <View style={styles.titleContainer}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieRating}>{item.year}</Text>
        </View>
      </ImageBackground>
    ));
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
    flex: 1,
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  movieGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  movieItem: {
    width: width / 2 - 20, // Adjust as needed based on your design
    height: height / 3, // Adjust as needed based on your design
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the opacity as needed
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set the text color to white
  },

  movieRating: {
    marginTop: 8,
    color: 'white', // Set the text color to white
  },
});

export default MovieScreen;
