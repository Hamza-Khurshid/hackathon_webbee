import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import Exandable from '../../commonComponents/expandable';
import {Category as CategoryType} from '../../interfaces';
import InputField from '../../commonComponents/textInput';
import useCategory from '../../store/useCategory';
import RNPickerSelect from 'react-native-picker-select';
import Delete from '../../assets/delete.png';
import SelectIcon from '../../assets/select.png';

const fieldTypes = ['text', 'number', 'date', 'checkbox'];

type CategoryProps = {
  category: CategoryType;
  expanded: null | string;
  onExpand: (val: string | null) => void;
};

function Category({category, expanded, onExpand}: CategoryProps) {
  const {addNewField, updateCategory, deleteCategory} = useCategory();

  const toggle = () => {
    expanded === category.id ? onExpand(null) : onExpand(category.id);
  };

  const addNewFieldHandler = () => {
    addNewField(category.id);
  };

  let categoryFields = category.fields;

  const updateCategoryHandler = (value: string, key: string) => {
    let newCategory = {...category, [key]: value};
    updateCategory(newCategory);
  };

  const updateCategoryFieldHandler = (
    value: string,
    fieldId: string,
    key: string,
  ) => {
    let newCategory = {...category};
    newCategory.fields[fieldId as unknown as keyof CategoryType][
      key as unknown as null
    ] = value;
    updateCategory(newCategory);
  };

  const deleteCategoryHandler = () => {
    deleteCategory(category.id);
  };

  const deleteCategoryFieldHandler = (fieldId: string) => {
    const newCategory = {...category};
    delete newCategory.fields[fieldId];
    updateCategory(newCategory);
  };

  return (
    <Exandable
      open={expanded == category.id}
      toggle={toggle}
      editable={true}
      title={category.name}
      onChangeTitle={val => updateCategoryHandler(val, 'name')}
      onDelete={deleteCategoryHandler}>
      <View>
        <View style={styles.fieldsHead}>
          <Text>Fields</Text>
          <TouchableOpacity
            style={styles.addFieldBtn}
            onPress={addNewFieldHandler}>
            <Text style={styles.addFieldTxt}>+</Text>
          </TouchableOpacity>
        </View>

        {/* divider */}
        <View style={styles.divider} />
        <View>
          {Object.keys(categoryFields || {}).map((fieldId, index) => {
            let item = categoryFields[fieldId];
            return (
              <View key={index}>
                <View style={[styles.rowJustify, styles.mT]}>
                  <View style={styles.row}>
                    <RNPickerSelect
                      onValueChange={value =>
                        updateCategoryFieldHandler(value, fieldId, 'type')
                      }
                      value={item.type}
                      items={fieldTypes.map((pItem: any) => {
                        return {
                          label:
                            String(pItem).charAt(0).toUpperCase() +
                            String(pItem).slice(1),
                          value: pItem,
                        };
                      })}
                      touchableWrapperProps={{
                        hitSlop: {
                          right: 50,
                          top: 20,
                          bottom: 20,
                        },
                      }}
                    />
                    <Image source={SelectIcon} style={styles.select} />
                  </View>
                  {/* delete category filed */}
                  <TouchableOpacity
                    onPress={() => deleteCategoryFieldHandler(fieldId)}>
                    <Image source={Delete} style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <InputField
                  label=""
                  value={item.name}
                  containerStyle={styles.inputContainer}
                  style={styles.input}
                  onChangeText={val =>
                    updateCategoryFieldHandler(val, fieldId, 'name')
                  }
                />
              </View>
            );
          })}
        </View>
      </View>
    </Exandable>
  );
}

export default Category;
