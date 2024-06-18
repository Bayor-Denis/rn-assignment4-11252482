import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBrand}>Codec</Text>
      <Text style={styles.header}>Welcome back</Text>
      <Text style={styles.text}>Let's log in. Apply to jobs!</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Text style={styles.orText}>or continue with</Text>
      <View style={styles.socialContainer}>
        <Button title="Apple" onPress={() => {}} />
        <Button title="Google" onPress={() => {}} />
        <Button title="Facebook" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'left',
  },
  textBrand: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 16,
    textAlign: 'left',
  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    padding:20,
  },
  buttonContainer: {
    marginTop: 12,
    height: 40,
    fontSize: 24,                          
    color:'#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#7799ff',
    marginBottom: 12,
    justifyContent: 'center',
    
    
    
  },
  orText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LoginScreen;