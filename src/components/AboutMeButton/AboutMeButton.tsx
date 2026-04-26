import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { GestureResponderEvent } from "react-native";

import {styles} from "./AboutMeButtonStyles";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export function AboutMeButton ({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Sobre mim</Text>
    </TouchableOpacity>
  );
};
