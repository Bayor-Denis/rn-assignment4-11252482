import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import JobCard from './JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const jobData = [
    { id: 1, image: require('../../assets/facebook.png'), title: 'Software Engineer', company: 'Facebook', featured: true },
    { id: 2, image: require('../../assets/google.png'), title: 'Project Manager', company: 'Google', featured: true },
    { id: 3, image: require('../../assets/download.png'), title: 'Data Scientist', company: 'Apple', featured: true },
    { id: 4, image: require('../../assets/Group142.png'), title: 'UX Designer', company: 'Design Studio', featured: false },
    { id: 5, image: require('../../assets/Group143.png'), title: 'Database Analyst', company: 'Tech Co.', featured: false },
  ];

  const featuredJobs = jobData.filter(job => job.featured);
  const regularJobs = jobData.filter(job => !job.featured);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hello, {name}!</Text>
          <Text style={styles.email}>{email}</Text>
          <Image source={require('../../assets/Ellipse.png')} style={styles.ellipseImage} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/Search.png')} style={styles.searchIcon} />
        <TextInput placeholder="Search for jobs" style={styles.searchInput} />
      </View>

      <Text style={styles.sectionHeader}>Featured Jobs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
        {featuredJobs.map(job => (
          <JobCard key={job.id} {...job} style={styles.featuredJobCard} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>Popular Jobs</Text>
      </View>
      {regularJobs.map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ellipseImage: {
    width: 30,
    height: 30,
    
    alignItems: 'right',
  },
  horizontalScroll: {
    paddingLeft: 16,
    margin: 10
  },
  featuredJobCard: {
    margin: 10,
    padding: 20,
  },
});

export default HomeScreen;