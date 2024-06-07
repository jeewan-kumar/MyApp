// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { commonStyles } from '../styles/common';

const QuizScreen = ({ route }) => {
  const { questions } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      Alert.alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={commonStyles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          title={option.text}
          onPress={() => handleAnswer(option.isCorrect)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default QuizScreen;
