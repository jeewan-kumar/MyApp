// screens/PracticeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { commonStyles } from '../styles/common';

const PracticeScreen = ({ route }) => {
  const [code, setCode] = useState('');
  const { title, description, solution } = route.params.exercise;

  const handleSubmit = () => {
    if (code.trim() === solution) {
      Alert.alert('Success', 'Your code is correct!');
    } else {
      Alert.alert('Try Again', 'Your code is not correct. Please try again.');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write your code here"
        multiline
        value={code}
        onChangeText={setCode}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  textInput: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    textAlignVertical: 'top',
  },
});

export default PracticeScreen;
