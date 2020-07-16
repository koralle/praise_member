import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Praise = () => {
  return (
    <View style={styles.container}>
      <Text>Praise</Text>
    </View>
  );
};

export default Praise;
