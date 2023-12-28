import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import StatusBar from './components/StatusBar';

const MovieFix = () => {
  return (
    <View>
      <StatusBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  staus: {
    backgroundColor: "#1a1918"
  },
});
export default MovieFix;
