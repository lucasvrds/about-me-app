import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./src/context/ThemeContext";

import { Home } from "./src/screens/Home/Home"
import { AboutMe } from "./src/screens/AboutMe/AboutMe"

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
     <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
