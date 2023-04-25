import { View, StyleSheet } from 'react-native'
import React from 'react'

const Seperator = () => {
  return (
    <View style = {styles.seperator} />
  )
}

const styles: any = StyleSheet.create({
    seperator: {
        height: 1,
        width: '10%', 
        backgroundColor: '#ddd',
        marginVertical: 25
    }
})

export default Seperator