import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, CustomButton} from '../components';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = () => {
    const [code, setCode] = useState<string>('');

    const navigation: any = useNavigation();
    
    const onConfirmPress = () => {
        navigation.navigate('Home')
    }

    const onResendPress = () => {
        console.warn('Resend Code!')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Confirm Email</Text>

                <CustomInput 
                    value = {code}
                    setValue = {setCode}
                    placeholder = 'Enter your confirmation code' 
                />

                <CustomButton 
                    onPress = {onConfirmPress}
                    text = 'Confirm'
                    type = 'SECONDARY'
                />

                <CustomButton 
                    onPress = {onResendPress}
                    text = "Resend Code"
                    type = 'MESSAGE'
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

export default ConfirmationScreen