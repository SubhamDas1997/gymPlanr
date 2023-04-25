import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/images/logo-full.png'
import { CustomInput, CustomButton, Seperator, SocialSignIn } from '../components';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { height } = useWindowDimensions();
    const navigation: any = useNavigation();
    
    const onSignInPress = () => {
        console.warn('Sign in!')
        // validate user first

        navigation.navigate('Home');
    }

    const onForgotPasswordPress = () => {
        console.warn('Forgot Password!')
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPress = () => {
        console.warn('Sign Up page!')
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode='contain'
                />

                <CustomInput 
                    value = {username}
                    setValue = {setUsername}
                    placeholder = 'Username' 
                />
                
                <CustomInput 
                    value = {password}
                    setValue = {setPassword}
                    placeholder = 'Password'
                    secureTextEntry
                />

                <CustomButton 
                    onPress = {onSignInPress}
                    text = 'Sign In'
                />

                <CustomButton 
                    onPress = {onForgotPasswordPress}
                    text = 'Forgot password?'
                    type = 'TERTIARY'
                />

                <Seperator />

                <View style={styles.logoSignIn}>
                    <SocialSignIn />
                </View>

                <CustomButton 
                    onPress = {onSignUpPress}
                    text = "Don't have an account? Click here!"
                    type = 'TERTIARY'
                />
            </View>
        </ScrollView>
    )
}

const styles: any = StyleSheet.create({
    root :{
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        width: '60%',
        maxWidth: 300,
        maxHeight: 200,
        marginTop: 20,
        marginBottom: 60
    },
    logoSignIn: {
        flex: 1, 
        flexDirection: 'row',
        gap: 20
    }
});

export default LoginScreen