import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { commonStyles } from '../styles/common';
import { lessons, exercises, quizzes } from '../data/content';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLessonNavigation = (lesson) => {
    navigation.navigate('Lesson', lesson);
  };

  const handleProfileNavigation = () => {
    // Navigate to user profile screen
  };

  const handleSearchNavigation = () => {
    // Navigate to search screen
  };

  const handleFeedbackNavigation = () => {
    // Navigate to feedback screen
  };

  const courseList = [
    { title: 'Java' },
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'JavaScript' },
    { title: 'React Native' },
    { title: 'Machine Learning' },
    { title: 'Artificial Intelligence' },
    { title: 'C#' },
    { title: 'MySQL' },
  ];

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => handleLessonNavigation(item)}
    >
      <Text style={styles.courseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.container}>
      {user && (
        <View style={styles.profileContainer}>
          <Text style={styles.welcomeText}>Hello, {user.email}</Text>
          <Button title="View Profile" onPress={handleProfileNavigation} />
        </View>
      )}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for courses..."
          onChangeText={(text) => console.log(text)} // Placeholder function, replace with actual search logic
        />
        <Button title="Search" onPress={handleSearchNavigation} />
      </View>
      <Text style={commonStyles.title}>Welcome to SkillUp Coding App!</Text>
      <Text style={styles.sectionTitle}>All Courses</Text>
      <FlatList
        data={courseList}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.courseList}
      />
      <View style={styles.additionalFeatures}>
        <Button title="Give Feedback" onPress={handleFeedbackNavigation} />
      </View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  profileContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseList: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  courseItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    color: '#212529',
  },
  additionalFeatures: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;

// import React, { useContext } from 'react';
// import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
// import { AuthContext } from '../context/AuthContext';
// import { commonStyles } from '../styles/common';
// import { lessons, exercises, quizzes } from '../data/content';

// const HomeScreen = ({ navigation }) => {
//   const { user, logout } = useContext(AuthContext);

//   const handleLessonNavigation = (lesson) => {
//     navigation.navigate('Lesson', lesson);
//   };

//   const handleProfileNavigation = () => {
//     // Navigate to user profile screen
//   };

//   const handleSearchNavigation = () => {
//     // Navigate to search screen
//   };

//   const handleFeedbackNavigation = () => {
//     // Navigate to feedback screen
//   };

//   const renderCourseItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.courseItem}
//       onPress={() => handleLessonNavigation(item)}
//     >
//       <Text style={styles.courseTitle}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={commonStyles.container}>
//       {user && (
//         <View style={styles.profileContainer}>
//           <Text style={styles.welcomeText}>Hello, {user.email}</Text>
//           <Button title="View Profile" onPress={handleProfileNavigation} />
//         </View>
//       )}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for courses..."
//           onChangeText={(text) => console.log(text)} // Placeholder function, replace with actual search logic
//         />
//         <Button title="Search" onPress={handleSearchNavigation} />
//       </View>
//       <Text style={commonStyles.title}>Welcome to SkillUp Coding App!</Text>
//       <Text style={styles.sectionTitle}>Enrolled Courses</Text>
//       {/* <FlatList
//         data={user.enrolledCourses} // Assuming user.enrolledCourses contains the enrolled courses
//         renderItem={renderCourseItem}
//         keyExtractor={(item) => item.title}
//         contentContainerStyle={styles.courseList}
//       /> */}
//       <View style={styles.additionalFeatures}>
//         <Button title="Give Feedback" onPress={handleFeedbackNavigation} />
//       </View>
//       <Button title="Logout" onPress={logout} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   welcomeText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   profileContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginRight: 10,
//     paddingHorizontal: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   courseList: {
//     flexGrow: 1,
//     paddingHorizontal: 10,
//   },
//   courseItem: {
//     backgroundColor: '#f8f9fa',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   courseTitle: {
//     fontSize: 16,
//     color: '#212529',
//   },
//   additionalFeatures: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;
