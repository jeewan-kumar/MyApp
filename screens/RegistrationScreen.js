import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { commonStyles } from '../styles/common';
import { validateEmail, validatePassword, validateName, validatePasswordsMatch } from '../utils/validation';

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    if (!validateName(fullName)) {
      Alert.alert('Registration Failed', 'Please enter your full name.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Registration Failed', 'Invalid email address.');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Registration Failed', 'Password must be at least 6 characters.');
      return;
    }
    if (!validatePasswordsMatch(password, confirmPassword)) {
      Alert.alert('Registration Failed', 'Passwords do not match.');
      return;
    }
    const success = register(fullName, email, password);
    if (success) {
      Alert.alert('Registration Successful', 'You can now log in.');
      navigation.navigate('Login');
    } else {
      Alert.alert('Registration Failed', 'An error occurred.');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Register</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;
