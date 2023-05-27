import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import { colors } from '../theme/colors'
import Delete from '../assets/delete.png'
import Down from '../assets/down.png'

type Props = {
  children: React.ReactNode,
  open: boolean,
  toggle: () => void
}

const Index = ({ children, open, toggle }: Props) => {
  return (
    <Fragment>
      <View style={styles.item}>
        <Text>Index</Text>
        <View style={styles.row}>
          <Image source={Delete} style={[styles.icon, styles.mR]} />
          <TouchableOpacity onPress={toggle}>
            <Image source={Down} style={[styles.icon, open && styles.rotate]} />
          </TouchableOpacity>
        </View>
      </View>
      {open && children}
    </Fragment>
  )
}

export default Index

const styles = StyleSheet.create({
  item: {
    width: '90%',
    height: 60,
    backgroundColor: colors.base,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: colors.black
  },
  icon: {
    width: 20, height: 20,
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mR: {
    marginRight: 15
  },
  rotate: {
    transform: [{ rotate: '180deg' }]
  }
})