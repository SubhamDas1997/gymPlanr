import { StyleSheet } from 'react-native'
import React from 'react'
import CustomLogoBtn from './CustomLogoBtn'
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const SocialSignIn = () => {
    const onFacebookBtnPress = () => {
        console.warn('Sign In FACEBOOK')
    }

    const onGoogleBtnPress = () => {
        console.warn('Sign In GOOGLE')
    }

    const onAppleBtnPress = () => {
        console.warn('Sign In APPLE')
    }

    return (
        <>
            <CustomLogoBtn 
                onPress = {onFacebookBtnPress}
                icon = {faFacebookF}
                bgColor = '#4267B2'
                color = 'white'
            />
            
            <CustomLogoBtn 
                onPress = {onGoogleBtnPress}
                icon = {faGoogle}
                bgColor = '#F4B400'
            />
            
            <CustomLogoBtn 
                onPress = {onAppleBtnPress}
                icon = {faApple}
                bgColor = 'black'
                color = 'white'
            />
        </>
    )
}

export default SocialSignIn