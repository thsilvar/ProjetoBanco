import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banco from './src/Banco';

export default function App() {
  return (
    <View style={styles.container}>
      <Banco/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
