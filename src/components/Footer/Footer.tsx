import React from "react";
import { View, Text } from 'react-native';

import {styles} from "./FooterStyles"

export function footer (){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Text>
    </View>
  );
};