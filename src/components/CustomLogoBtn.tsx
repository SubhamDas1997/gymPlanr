import { View, Text, Pressable, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'

type Props = {
    onPress: any,
    icon: any,
    bgColor: string,
    color?: string
}

const CustomLogoBtn = ({ onPress, icon, bgColor, color = 'black' }: Props) => {
  return (
    <Pressable
        onPress = {onPress}
        style = {[styles.container, {backgroundColor: bgColor}]}
    >
        <FontAwesomeIcon 
            icon = {icon}
            style = {[styles.icon, {color: color}]}
        />
    </Pressable>
  )
}

const styles: any = StyleSheet.create({
    container: {
        width: '20%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
    },
    icon: {
        padding: 10
    }
})

export default CustomLogoBtn