import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, CustomButton, Seperator } from '../components';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');

    const navigation: any = useNavigation();
    
    const onRegisterPress = () => {
        console.warn('Register!')
        navigation.navigate('ConfirmEmail')
    }

    const onTermsPress = () => {
        console.warn('Terms clicked!')

    }

    const onPolicyPress = () => {
        console.warn('Policy clicked!')
    }

    const onSignInPress = () => {
        console.warn('Sign In!')
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Create Account</Text>

                <CustomInput 
                    value = {username}
                    setValue = {setUsername}
                    placeholder = 'Username' 
                />
                
                <CustomInput 
                    value = {email}
                    setValue = {setEmail}
                    placeholder = 'Email'
                    secureTextEntry
                />

                <CustomInput 
                    value = {password}
                    setValue = {setPassword}
                    placeholder = 'Password'
                />

                <CustomInput 
                    value = {passwordRepeat}
                    setValue = {setPasswordRepeat}
                    placeholder = 'Repeat Password'
                    secureTextEntry
                />

                <CustomButton 
                    onPress = {onRegisterPress}
                    text = 'Register'
                    type = 'SECONDARY'
                />

                <Text style = {styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text 
                        style = {styles.link}
                        onPress = {onTermsPress}
                    >
                         terms of Use
                    </Text> and{' '}
                    <Text 
                        style = {styles.link}
                        onPress = {onPolicyPress}
                    >
                        Privacy Policy
                    </Text>.
                </Text>

                <Seperator />

                <CustomButton 
                    onPress = {onSignInPress}
                    text = "Have an account? Sign in!"
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 20
    },
    text :{
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FD8075'
    }
});

export default SignUpScreen