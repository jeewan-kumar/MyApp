import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default TextInput;
