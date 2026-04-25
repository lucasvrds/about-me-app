import React from "react";
import { View, Image } from "react-native";

import { Logo } from '../../components/Logo/Logo';

import { styles } from './AboutMeStyles';
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import { Footer } from "../../components/Footer/Footer";

export function Home(){
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Logo/>
                <ProfileImage/>
            </View>

            <View style={styles.footerContainer}>
                <Footer/>
            </View>

        </View>
    )
}