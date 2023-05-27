import React from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {styles} from './style';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import InputField from '../../commonComponents/textInput';
import SwitchField from '../../commonComponents/switchField';
import DatePickerField from '../../commonComponents/datePickerField';
import useCategory from '../../store/useCategory';
import Category from './category';
import Fab from '../../commonComponents/fab';

function Catagories() {
  const {categories, addNewCategory} = useCategory();

  const [expanded, setExpanded] = React.useState<null | string>(null);

  const addNewCategoryHandler = () => {
    addNewCategory();
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* list all categories */}

        {categories.map((category, index) => {
          return (
            <Category
              key={index}
              category={category}
              onExpand={(val: string | null) => setExpanded(val)}
              expanded={expanded}
            />
          );
        })}
      </ScrollView>
      {/* FAB to add a new category */}
      <Fab text="+" onPress={addNewCategoryHandler} />
    </>
  );
}

export default Catagories;
