import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

import {styles} from "./AboutMeButtonStyles";

export function AboutMeButton () {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Entre em contato!</Text>
    </TouchableOpacity>
  );
};
