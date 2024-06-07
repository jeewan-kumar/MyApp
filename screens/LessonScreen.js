// screens/LessonScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { commonStyles } from '../styles/common';

const LessonScreen = ({ route }) => {
  const { title, content } = route.params;

  return (
    <ScrollView contentContainerStyle={commonStyles.container}>
      <Text style={commonStyles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default LessonScreen;
