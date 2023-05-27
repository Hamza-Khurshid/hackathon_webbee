import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Index = () => {
  return (
    <View style={styles.item}>
      <Text>Index</Text>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  item: {
    width: '95%',
    height: 60,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
})