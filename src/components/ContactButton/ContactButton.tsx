import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

import {styles} from "./ContactButtonStyles";

export function ContactButton () {
  const handlePress = () => {
    Alert.alert('Entre em contato!');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Entre em contato!</Text>
    </TouchableOpacity>
  );
};
