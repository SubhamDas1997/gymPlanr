import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, SignUpScreen, ConfirmationScreen, ForgotPasswordScreen, ResetPasswordScreen, HomeScreen }  from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'SignIn' component = {LoginScreen} />
        <Stack.Screen name = 'SignUp' component = {SignUpScreen} />
        <Stack.Screen name = 'ConfirmEmail' component = {ConfirmationScreen} />
        <Stack.Screen name = 'ForgotPassword' component = {ForgotPasswordScreen} />
        <Stack.Screen name = 'ResetPassword' component = {ResetPasswordScreen} />
        <Stack.Screen name = 'Home' component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation