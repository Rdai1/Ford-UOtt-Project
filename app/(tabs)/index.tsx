import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(29.2, 9.56, 255)', 'rgb(242.63, 242, 249.78)', 'rgb(42.22, 10.01, 240.12)']}
        style={styles.div}>
        {/* <Image style={styles.fordLogo} source={require('./ford-logo.svg')} /> */}
      </LinearGradient>
      <Text style={styles.title}>Login Page</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder = "Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="numeric"
        />
      </SafeAreaView>

      <View style={styles.password} />
      <View style={styles.username} />
      <View style={styles.logIn} />
      <View style={styles.signUp} />
    </View>
  );
};const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  div: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 1000,
    width: 1000,
    position: 'absolute',
  },
  password: {
    backgroundColor: '#d9d9d94c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    height: 31,
    left: 33,
    position: 'absolute',
    top: 335,
    width: 297,
  },
  username: {
    backgroundColor: '#d9d9d94c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    height: 31,
    left: 32,
    position: 'absolute',
    top: 259,
    width: 297,
  },
  logIn: {
    backgroundColor: '#d9d9d94c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    height: 28,
    left: 230,
    position: 'absolute',
    top: 432,
    width: 94,
  },
  signUp: {
    backgroundColor: '#d9d9d94c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    height: 28,
    left: 33,
    position: 'absolute',
    top: 432,
    width: 95,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
