import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen