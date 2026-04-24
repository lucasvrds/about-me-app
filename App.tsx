import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from "./src/screens/Home/Home"
import { Footer } from "./src/components/Footer/Footer";
import { ContactButton } from "./src/components/ContactButton/ContactButton";

export default function App() {
  return (
    <View>
    <Home/>
       <ContactButton />
    </View>
  );
}
