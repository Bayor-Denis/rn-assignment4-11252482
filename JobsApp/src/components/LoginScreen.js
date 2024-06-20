import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBrand}>Codec</Text>
      <Text style={styles.TextBrand}>Welcome back 👋</Text>
      <Text style={styles.textBrand1}>Let's log in. Apply to jobs!</Text>
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
        <Image source={require('../../assets/download.png')} style={styles.socialImage} />
        
        <Image source={require('../../assets/google.png')} style={styles.socialImage} /> 
         
        <Image source={require('../../assets/facebook.png')} style={styles.socialImage} />
      
      </View>
      <View style={styles.registerContainer}>
        <Image source={require('../../assets/register.png')} style={styles.registerImage}/> 
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin:20,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'bottom',
  },
  textBrand: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 16,
    textAlign: 'left',
  },
  textBrand1: {
    fontSize: 16,
    color: 'black',
    marginBottom: 16,
    textAlign: 'left',
  },
  TextBrand: {
    fontSize: 24,
    color: 'black',
    marginBottom: 16,
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    marginTop: 12,
    height: 40,
    color: 'white',
    backgroundColor:'#7799ff',
    borderRadius: 10,
    marginBottom: 12,
    justifyContent: 'center',
  },
  orText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  registerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialContainer: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 30,
    height: 20,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 40,
  },
  socialImage: {
    width: 50,
    height: 50,
  },
});

export default LoginScreen;