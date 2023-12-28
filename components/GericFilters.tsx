import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import DynamicSizeButton from './DynamicSizeButtons'; // Adjust the path based on your file structure

const YourAppScreen: React.FC = () => {
  const handleButtonPress = () => {
    // Add logic for button press
    console.log('Button Pressed!');
  };

  return (
    <View>
      <DynamicSizeButton buttonText="All" onPress={handleButtonPress} />
    </View>
  );
};

export default YourAppScreen;
