import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, CustomButton} from '../components';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState<string>('');

    const navigation: any = useNavigation();
    
    const onSendPress = () => {
        navigation.navigate('ResetPassword')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.root}>
                <Text style = {styles.title}>Verify Username</Text>

                <CustomInput 
                    value = {username}
                    setValue = {setUsername}
                    placeholder = 'Enter your username' 
                />

                <CustomButton 
                    onPress = {onSendPress}
                    text = 'Send'
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