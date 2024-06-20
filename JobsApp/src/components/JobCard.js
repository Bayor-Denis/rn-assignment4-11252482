import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const JobCard = ({ title, company, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JobCard;