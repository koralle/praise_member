import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AddMember = () => {
  return (
    <View style={styles.container}>
      <Text>AddMember</Text>
    </View>
  );
};

export default AddMember;
