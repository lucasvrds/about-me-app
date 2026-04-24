import React from "react";
import { View, Image } from "react-native";

import { Logo } from '../../components/Logo/Logo';

import { styles } from './HomeStyles';

export function Home(){
    return(
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Logo/>
            </View>

        </View>
    )
}