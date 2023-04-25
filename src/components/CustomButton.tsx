import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

type Props = {
    onPress: any,
    text: string,
    type?: string
}

const CustomButton = ({ onPress, text, type = "PRIMARY" }: Props) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles: any = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#FB736D'
    },
    container_SECONDARY: {
        backgroundColor: '#60A3D9'
    },
    container_TERTIARY: {
        padding: 2
    },
    container_MESSAGE: {
        borderColor: '#FB736D',
        borderWidth: 2
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY: {
        color: 'gray',
        textDecorationLine: 'underline',
        textDecorationColor: '#ddd'
    },
    text_MESSAGE: {
        color: 'gray'
    }
})

export default CustomButton