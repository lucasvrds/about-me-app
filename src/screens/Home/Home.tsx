import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { Logo } from "../../components/Logo/Logo";

import { styles } from "./HomeStyles";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";
import { ContactButton } from "../../components/ContactButton/ContactButton";
import { AboutMeButton } from "../../components/AboutMeButton/AboutMeButton";

export function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Logo />
        <ProfileImage />
      </View>

      <Text style={styles.title}>
        Eleve seu negócio digital a outro nível com um Front-end de qualidade!
      </Text>

      <Text style={styles.intro}>
        Olá! Somos a Code Center, desenvolvedores Front-end com especialização
        em React, HTML e CSS. Ajudamos pequenos negócios e designers a colocarem
        em prática boas ideias. Vamos conversar?
      </Text>

      <View style={styles.buttonsContainer}>
        <AboutMeButton />
        <ContactButton />
      </View>

      <Text style={styles.social}>Acesse minhas redes:</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialItem}>
          <Image
            source={require("../../assets/github.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem}>
          <Image
            source={require("../../assets/linkedin.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}
