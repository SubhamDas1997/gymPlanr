import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    value: string,
    setValue: (value: string) => void,
    placeholder: string,
    secureTextEntry?: boolean
}

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder = {placeholder} 
        secureTextEntry = {secureTextEntry}
        style = {styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        margin: 10,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5
    },
    input: {}
});

export default CustomInput