import React from "react";
import { View, Image } from "react-native";

import { styles } from "./ProfileImageStyles";
import profile from "../../assets/ProfileImage.jpg"

export function ProfileImage(){
    return(
        <View>
            <Image
                source={profile}
                style={styles.imageSize}
            />
        </View>
    )
}