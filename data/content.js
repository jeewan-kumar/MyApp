// data/content.js

export const lessons = [
    {
      id: '1',
      title: 'Introduction to React Native',
      content: 'React Native is a framework for building native apps using React...',
    },
    {
      id: '2',
      title: 'Components and Props',
      content: 'Components let you split the UI into independent, reusable pieces...',
    },
  ];
  
  export const exercises = [
    {
      id: '1',
      title: 'Create a Simple Component',
      description: 'Create a simple React Native component that displays "Hello, World!"',
      solution: '<Text>Hello, World!</Text>',
    },
  ];
  
  export const quizzes = [
    {
      id: '1',
      questions: [
        {
          question: 'What is React Native?',
          options: [
            { text: 'A JavaScript library for building user interfaces', isCorrect: false },
            { text: 'A framework for building native apps using React', isCorrect: true },
            { text: 'A CSS framework', isCorrect: false },
          ],
        },
      ],
    },

    {
        id: '2',
        //title: 'JavaScript Quiz',
        questions: [
          {
            question: 'What is the output of 2 + 2?',
            options: [
              { text: '3', isCorrect: false },
              { text: '4', isCorrect: true },
              { text: '5', isCorrect: false },
            ],
          },
          // Add more questions here
        ],
      },
  ];
  