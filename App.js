import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp = {
  apiKey: process.env.API_KEY,
  authDomain: "collaborative-classroom-8cbff.firebaseapp.com",
  projectId: "collaborative-classroom-8cbff",
  storageBucket: "collaborative-classroom-8cbff.appspot.com",
  messagingSenderId: "270275908096",
  appId: "1:270275908096:web:aaccc62082397f1cc43ee5",
  measurementId: "G-F3NKCKXY5R"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Scheme</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
