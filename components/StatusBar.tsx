import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GericFilters from './GericFilters';
import colors from '../styles/Colors';

const StatusBar = () => {
  return (
    <View style={styles.staus}>
      <Text style={styles.title}>MovieFix</Text>
      <GericFilters />
    </View>
  );
};

const styles = StyleSheet.create({
    staus: {
        backgroundColor: '#4A4A47'
      },
      title:{
        fontFamily: "Avenir", 
        fontSize: 28, 
        fontWeight: '900',
        color: 'red',
        textTransform: 'uppercase', 
        borderRadius: 10,
        padding: 10,
        transform: [{ skewX: '-20deg' }],
        letterSpacing: 1
      }
});

export default StatusBar;
