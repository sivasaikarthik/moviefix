import React, { useEffect, useState } from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet, ScrollView } from 'react-native';
import DynamicSizeButton from './DynamicSizeButtons'; // Adjust the path based on your file structure
import { getGenericMovies } from '../services/MovieService';
import { Genric } from '../interfaces/Genric';

const YourAppScreen: React.FC = () => {

  const [generic, setGenric] = useState<Genric[]>([]);

  useEffect(() => {
    const fetchGenericMovies = async () => {
      try {
        const response = await getGenericMovies();
        const genres = response.data.genres;

        // Do something with the list of generic movies, such as updating state in your component
        // console.log('Generic Movies:hey yo                   ', genres);
        setGenric(genres);
      } catch (error) {
        // Handle errors, e.g., log the error or show an error message
        console.error('Error fetching generic movies:', error);
      }
    };

    fetchGenericMovies();
  }, []);
  
  const handleButtonPress = () => {
    // Add logic for button press
    console.log('Button Pressed!');
  };

  return (
    <View >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <DynamicSizeButton key={-1} buttonText={"All"} onPress={handleButtonPress}/>
        {generic.map((text, index) => (
         <DynamicSizeButton key={text.id} buttonText={text.name} onPress={handleButtonPress}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default YourAppScreen;
