import React from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {styles} from './style';
import Exandable from '../../commonComponents/expandable';
import {Category as CategoryType} from '../../interfaces';
import InputField from '../../commonComponents/textInput';
import useCategory from '../../store/useCategory';
import RNPickerSelect from 'react-native-picker-select';
import Delete from '../../assets/delete.png';
import SelectIcon from '../../assets/select.png';
import useMachines from '../../store/useMachines';

const fieldTypes = ['text', 'number', 'date', 'checkbox'];

type CategoryProps = {
  category: CategoryType;
  expanded: null | string;
  onExpand: (val: string | null) => void;
};

function Category({category, expanded, onExpand}: CategoryProps) {
  const {addNewField, updateCategory, deleteCategory} = useCategory();
  const {deleteAllMachines} = useMachines();

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
    newCategory.fields[fieldId] = {
      ...newCategory.fields[fieldId],
      [key]: value,
    };
    updateCategory(newCategory);
  };

  const deleteCategoryHandler = () => {
    // delete category
    deleteCategory(category.id);

    // delete all machines of this category
    deleteAllMachines(category.id);
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
      title={category?.name}
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
                      style={{
                        inputAndroid: styles.typePickerAnd,
                      }}
                      touchableWrapperProps={{
                        hitSlop: {
                          right: 50,
                          top: 20,
                          bottom: 20,
                        },
                      }}
                    />

                    {
                      Platform.OS === 'ios' ? (
                        <Image source={SelectIcon} style={styles.select} />

                      ) : null

                    }
                    
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

        {Object.keys(categoryFields || {}).length ? (
          // {/* select a field for title */}
          <View style={[styles.row, styles.titlePickCont]}>
            <Text>Title Field</Text>
            <View style={styles.row}>
              <RNPickerSelect
                placeholder={'Select a field'}
                onValueChange={value =>
                  updateCategoryHandler(value, 'titleFieldId')
                }
                value={category.titleFieldId || ''}
                items={Object.keys(categoryFields || {}).map(fieldId => {
                  let item = categoryFields[fieldId];
                  return {
                    label:
                      String(item.name).charAt(0).toUpperCase() +
                      String(item.name).slice(1),
                    value: fieldId,
                  };
                })}
                style={{
                  inputIOS: styles.titlePicker,
                  inputAndroid: styles.titlePickerAnd,
                }}
                touchableWrapperProps={{
                  hitSlop: {
                    right: 50,
                    top: 20,
                    bottom: 20,
                  },
                }}
              />

              {
                Platform.OS === 'ios' ? (
                  <Image source={SelectIcon} style={styles.select} />
                ) : null
              }
            </View>
          </View>
        ) : null}
      </View>
    </Exandable>
  );
}

export default Category;
