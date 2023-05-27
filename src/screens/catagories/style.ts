import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  fieldsCont: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },


  container: {
    backgroundColor: colors.white,
    zIndex: 100,
    minHeight: '100%',
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  fieldsHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  addFieldBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addFieldTxt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  mR: {
    marginRight: 15,
  },
});
