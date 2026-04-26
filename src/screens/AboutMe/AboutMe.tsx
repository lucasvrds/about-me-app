import React from "react";
import {View,  Text,  Image,  TouchableOpacity,  ScrollView,  Switch,  Alert,  Linking,} from "react-native";
import { useTheme } from "../../context/ThemeContext";

import { Logo } from "../../components/Logo/Logo";

import { styles } from "./AboutMeStyles";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";

export function AboutMe() {
  const { isDark } = useTheme();

  const backgroundColor = isDark ? "#121212" : "#2b2b2b";
  const textColor = isDark ? "#ffffff" : "#cccccc";

  return (
   <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      <View style={styles.headerContainer}>
        <Logo />
        <ProfileImage />
      </View>

      <View style={[styles.container, { backgroundColor }]}>
         <Text style={[styles.title, { color: textColor }]}>Sobre mim</Text>
         <Text style={[styles.intro, { color: textColor }]}>
          Somos a Code Center, desenvolvedores Front-end apaixonados por
          transformar ideias em interfaces funcionais e acessíveis. Trabalhamos
          principalmente com React, HTML e CSS, criando experiências digitais
          que não só funcionam bem, mas também fazem sentido para quem usa.
          {"\n"}
          {"\n"}
          Gostamos de colaborar de perto com pequenos negócios, designers e times
          criativos, ajudando a elevar sua ideia a forma prática e eficiente.
          Acreditamos que um bom produto nasce do equilíbrio entre técnica e
          comunicação clara ao longo do processo. 
          {"\n"}
          {"\n"}
          Estamos sempre buscando evoluir,
          aprimorar nossas habilidades, otimizar performance, melhorando a
          usabilidade do requerimento mais essenciais. Se você tem uma ideia,
          vamos conversar!
        </Text>
        <Footer />
      </View>
    </ScrollView>
  );
}
