import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import {colors} from '../theme/colors';
import Delete from '../assets/delete.png';
import Down from '../assets/down.png';
import InputField from './textInput';

type Props = {
  children: React.ReactNode;
  open: boolean;
  editable?: boolean;
  title: string;
  onChangeTitle?: (value: string) => void;
  onDelete: () => void;
  toggle: () => void;
};

const Index = ({children, open, editable,title, toggle, onChangeTitle, onDelete}: Props) => {
  return (
    <Fragment>
      <View style={styles.item}>
        {editable ? (
          <InputField
            label=""
            value={title}
            onChangeText={onChangeTitle as (value: string) => void}
          />
        ) : (
          <Text>Index</Text>
        )}

        <View style={styles.row}>
          <TouchableOpacity onPress={onDelete}>

          <Image source={Delete} style={[styles.icon, styles.mR]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggle}>
            <Image source={Down} style={[styles.icon, open && styles.rotate]} />
          </TouchableOpacity>
        </View>
      </View>
      {open && <View style={styles.subContainer}>{children}</View>}
    </Fragment>
  );
};

export default Index;

const styles = StyleSheet.create({
  item: {
    width: '90%',
    backgroundColor: colors.base,
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.base,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mR: {
    marginRight: 15,
  },
  rotate: {
    transform: [{rotate: '180deg'}],
  },
});
