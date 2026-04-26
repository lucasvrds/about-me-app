import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Switch, Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../../context/ThemeContext";


import { Logo } from "../../components/Logo/Logo";

import { styles } from "./HomeStyles";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";
import { ContactButton } from "../../components/ContactButton/ContactButton";
import { AboutMeButton } from "../../components/AboutMeButton/AboutMeButton";

type RootStackParamList = {
  Home: undefined;
  AboutMe: undefined;
};

export function Home() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();  
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    Alert.alert('Switch pressionado');
  };
  const openLink = (url: string) => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Erro', 'Não foi possível abrir o link');
  });
};

  const backgroundColor = isDark ? "#121212" : "#2b2b2b";
  const textColor = isDark ? "#ffffff" : "#cccccc";

  return (
    
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
       <View style={styles.headerContainer}>
        <Logo />
        <ProfileImage />
      </View>

      <Text style={[styles.title, { color: textColor }]}>Eleve seu negócio digital a outro nível com um Front-end de qualidade!</Text>
      <Text style={[styles.intro, { color: textColor }]}>Olá! Somos a Code Center, desenvolvedores Front-end com especialização em React, HTML e CSS. Ajudamos pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?</Text>

      <View style={styles.buttonsContainer}>
        <AboutMeButton onPress={() => navigation.navigate(    'AboutMe')} />
        <ContactButton />
      </View>

      <Text></Text>
      <Text style={[styles.social, { color: textColor }]}>Acesse minhas redes:</Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, { color: textColor }]}>Alterar visualização</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDark  ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            toggleTheme();
            Alert.alert('Switch pressionado');
          }}
          value={isDark}
        />
      </View>
      
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialItem} onPress={() => openLink('https://github.com/VitorSolerAguilar')}>
          <Image
            source={require("../../assets/github.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem} onPress={() => openLink('https://www.linkedin.com/in/lucas-vrds/')}>
          <Image
            source={require("../../assets/linkedin.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem} onPress={() => openLink('https://www.instagram.com/fatecitu/')}>
          <Image
            source={require("../../assets/instagram.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Image
            source={require("../../assets/twitch.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Twitch</Text>
        </TouchableOpacity>
      </View>
     
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}
