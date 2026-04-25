import React from "react";
import { View, Text, Image } from "react-native";

import { Logo } from "../../components/Logo/Logo";

import { styles } from "./HomeStyles";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";
import { ContactButton } from "../../components/ContactButton/ContactButton";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Logo />
        <ProfileImage />
      </View>

      <View style={styles.buttonsContainer}>
        <ContactButton />
      </View>

      <Text style={styles.social}>Acesse minhas redes:</Text>
      <View style={styles.socialIcons}>
        {}
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
