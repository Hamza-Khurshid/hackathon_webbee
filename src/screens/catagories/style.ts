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
    flexGrow: 1,
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
    borderRadius: 7,
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
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  mL: {
    marginLeft: 10,
  },
  mT: {
    marginTop: 25,
  },
  rowJustify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 0,
    marginTop: 5,
  },
  input: {
    marginTop: 0,
  },
  select: {
    height: 12,
    width: 12,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlePickCont: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  titlePicker: {
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 38,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    minWidth: 150,
  }
});
