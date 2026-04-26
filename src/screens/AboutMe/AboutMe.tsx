import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  Linking,
} from "react-native";

import { Logo } from "../../components/Logo/Logo";

import { styles } from "./AboutMeStyles";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";

export function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Logo />
        <ProfileImage />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sobre mim</Text>
        <Text style={styles.intro}>
          Sou a Joana Santos, desenvolvedora Front-end apaixonada por
          transformar ideias em interfaces funcionais e acessíveis. Trabalho
          principalmente com React, HTML e CSS, criando experiências digitais
          que não só funcionam bem, mas também fazem sentido para quem usa.
          {"\n"}
          {"\n"}
          Gosto de colaborar de perto com pequenos negócios, designers e times
          criativos, ajudando a elevar sua ideia a forma prática e eficiente.
          Acredito que um bom produto nasce do equilíbrio entre técnica e
          comunicação clara ao longo do processo. 
          {"\n"}
          {"\n"}
          Estou sempre buscando evoluir,
          aprimorar minhas habilidades, otimizar performance, melhorando a
          usabilidade do requerimento mais essenciais. Se você tem uma ideia,
          vamos conversar!
        </Text>
        <Footer />
      </View>
    </ScrollView>
  );
}
