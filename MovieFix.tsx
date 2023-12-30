import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import StatusBar from './components/StatusBar';
import MovieListScreen from './components/MovieListScreen';
import {Movie} from './interfaces/MovieInterface';

const MovieFix = () => {
  const movieData: Movie[] = [
    {title: 'Movie 1', year: '2022'},
    {title: 'Movie 2', year: '2021'},
    {title: 'Movie 3', year: '2020'},
    {title: 'Movie 4', year: '2019'},
    {title: 'Movie 5', year: '2018'},
    {title: 'Movie 6', year: '2017'},
    {title: 'Movie 7', year: '2016'},
    {title: 'Movie 8', year: '2015'},
    {title: 'Movie 9', year: '2014'},
    {title: 'Movie 10', year: '2013'},
    {title: 'Movie 11', year: '2012'},
    {title: 'Movie 12', year: '2011'},
    {title: 'Movie 13', year: '2010'},
    {title: 'Movie 14', year: '2009'},
    {title: 'Movie 15', year: '2008'},
    // Add more movies as needed
  ];

  const years = [2010, 2011, 2012, 2013, 2014];

  const renderMoviewScreens = () => {
    return years.map((item, index) => ( <MovieListScreen key={index} movieData={movieData} year={item} />
    ));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar />
          <ScrollView>{renderMoviewScreens()}</ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  staus: {
    backgroundColor: '#1a1918',
  },
});
export default MovieFix;
