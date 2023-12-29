import React from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet, ScrollView } from 'react-native';
import DynamicSizeButton from './DynamicSizeButtons'; // Adjust the path based on your file structure

const YourAppScreen: React.FC = () => {

  const handleButtonPress = () => {
    // Add logic for button press
    console.log('Button Pressed!');
  };

  const buttonData = ['aff 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

  return (
    <View >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {buttonData.map((text, index) => (
         <DynamicSizeButton key={index} buttonText={text} onPress={handleButtonPress}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default YourAppScreen;
