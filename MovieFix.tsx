import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import StatusBar from './components/StatusBar';
import MovieListScreen from './components/MovieListScreen'; // Make sure to import MovieListScreen
import {discoverMovies} from './services/MovieService';



import {MovieScreenProps} from './interfaces/MovieScreenProps';

const MovieFix = () => {
  const initialYear = 2012;
  const [scrollDirection, setScrollDirection] = useState<string>('');
  const [yearMoviesData, setYearMoviesData] = useState<MovieScreenProps[]>([]);
  const [previouYear, setPreviousYear] = useState(initialYear);
  const [nextYear, setNextYear] = useState(initialYear);

  const [loading, setLoading] = useState(false);

  const fetchMovies = async (direction: 'left' | 'right', year: number) => {
    try {
      setLoading(true);
      const response = await discoverMovies(year, 1);
      const yearMovie: MovieScreenProps = {
        year: year,
        movieData: response.data.results,
      };
      setYearMoviesData(prevData =>
        direction === 'left'
          ? [yearMovie, ...prevData]
          : [...prevData, yearMovie],
      );
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('left', initialYear)
    loadMoreRecentMovies()
    loadMoreOlderMovies()
  }, []);

  const loadMoreOlderMovies = async () => {
    if (!loading) {
      await fetchMovies('left', previouYear - 1);
      setPreviousYear(previouYear - 1);
    }
  };

  const loadMoreRecentMovies = async () => {
    console.log('recent');
    if (!loading) {
      await fetchMovies('right', nextYear + 1);
      setNextYear(nextYear + 1);
      console.log(nextYear)
    }
  };


  const handleScroll = (event: any) => {
    const currentScrollPos: number = event.nativeEvent.contentOffset.y;
    const windowHeight: number = event.nativeEvent.layoutMeasurement.height;
    const documentHeight: number = event.nativeEvent.contentSize.height;
    const scrollPercentage: number = (currentScrollPos / (documentHeight - windowHeight)) * 100;

    console.log("insi")
    if (currentScrollPos > 0 && currentScrollPos < windowHeight) {
      setScrollDirection(currentScrollPos > windowHeight / 2 ? 'up' : 'down');
    }

    if (scrollPercentage > 50 ) {
      console.log("UPPPP")
      loadMoreRecentMovies();
    }

    if (scrollPercentage < 50 ) {
      console.log("Down")
      loadMoreOlderMovies();
    }
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar />
         
            <FlatList
              data={yearMoviesData}
              renderItem={({item}) => (
                <MovieListScreen year={item.year} movieData={item.movieData} />
              )}
              keyExtractor={(item, index) => index.toString()}
              onEndReachedThreshold={100}
              onScroll={handleScroll}
            />
          
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
 
  status: {
    backgroundColor: '#1a1918',
  },
});

export default MovieFix;
