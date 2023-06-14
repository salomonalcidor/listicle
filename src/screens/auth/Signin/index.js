import { ScrollView, Text } from "react-native"
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/Input"
import React from "react"
import Button from "../../../components/Button"
import Seperator from "../../../components/Seperator"
import GoogleBtn from "../../../components/GoogleBtn"
import { css } from "./styles"

const Signin = () => {
    const onSignUp = () => {
        console.log('sign up pressed')
    }

    return (
        <ScrollView style={css.container}>
            <AuthHeader title="Sign In" />

            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="••••••••" isPassword />

            <Button style={css.button} title="Sign In" />

            <Seperator text="Or sign up with" />

            <GoogleBtn />

            <Text style={css.footer}>
                Don't have an account?
                <Text onPress={onSignUp} style={css.footerLink}> Sign Up</Text>
            </Text>
        </ScrollView>
    )
}

export default React.memo(Signin);