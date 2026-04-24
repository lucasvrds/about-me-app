import React from "react";
import { View, Image } from "react-native";

import { styles } from "./LogoStyles";
import logo from "../../assets/Logo.png"

export function Logo(){
    return(
        <View>
            <Image
                source={logo}
                style={styles.imageSize}
            />
        </View>
    )
}