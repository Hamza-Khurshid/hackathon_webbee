import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Exandable from '../../commonComponents/expandable'
import styles from './style'
import Item from './item'

const Index = () => {
  let [open, setOpen] = useState(null)

  const toggle = (index: number) => () => {
    open == index ? setOpen(null) : setOpen(index)
  }
  return (
    <View style={styles.container}>
      {[2, 3, 4, 5, 6].map((item, index) => {
        return <Exandable open={open == index} toggle={toggle(index)} key={index}>
          <Item />
        </Exandable>
      })}

    </View>
  )
}

export default Index