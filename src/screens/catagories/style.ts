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
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addFieldTxt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  mL: {
    marginLeft: 10,
  },
  mT: {
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    paddingVertical: 0,
    marginTop: 5,
  },
  input: {
    marginTop: 0,
  },
});
