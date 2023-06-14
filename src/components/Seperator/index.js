import { Image, Pressable, Text, TextInput, View, ViewBase } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Seperator = ({ text }) => {


    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
            {/* <Image style={styles.image} source={require('../../assets/google.png')} /> */}
        </View>
    )
}

export default Seperator;