import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, CustomButton} from '../components';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [code, setCode] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [repeatNewPassword, setRepeatNewPassword] = useState<string>('');

    const navigation: any = useNavigation();
    
    const onSubmitPress = () => {
        navigation.navigate('Home')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Reset Password</Text>

                <CustomInput 
                    value = {code}
                    setValue = {setCode}
                    placeholder = 'Enter your code' 
                />

                <CustomInput 
                    value = {newPassword}
                    setValue = {setNewPassword}
                    placeholder = 'Enter your new password'
                    secureTextEntry
                />

                <CustomInput 
                    value = {repeatNewPassword}
                    setValue = {setRepeatNewPassword}
                    placeholder = 'Re-enter your new password'
                    secureTextEntry
                />

                <CustomButton 
                    onPress = {onSubmitPress}
                    text = 'Submit'
                    type = 'SECONDARY'
                />

                <CustomButton 
                    onPress = {onSignInPress}
                    text = "< Back to Sign in!"
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

export default ForgotPasswordScreen