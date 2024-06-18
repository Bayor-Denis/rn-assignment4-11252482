import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JobCard from './JobCard'; // Ensure the path is correct

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobData = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co.', featured: true },
    // Add more job objects here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {name}</Text>
      <Text style={styles.email}>{email}</Text>

      <Text style={styles.sectionHeader}>Popular Jobs</Text>
      {jobData.filter(job => !job.featured).map(job => (
        <JobCard key={job.id} {...job} />
      ))}

      <Text style={styles.sectionHeader}>Featured Jobs</Text>
      {jobData.filter(job => job.featured).map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default HomeScreen;