import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JobCard = ({ title, company }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: 'gray',
  },
});

export default JobCard;