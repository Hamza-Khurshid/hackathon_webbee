import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'

const Item = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Enter your name here' />
      <TextInput style={styles.input} placeholder='Enter your name here' />
      <TextInput style={styles.input} placeholder='Enter your name here' />
      <TextInput style={styles.input} placeholder='Enter your name here' />
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginTop: 10
  }
})