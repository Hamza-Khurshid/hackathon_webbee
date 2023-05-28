import {create} from 'zustand';
import {generateUniqueId} from '../utils/uniqueId';
import {Category, Field} from '../interfaces';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CategoryStoreInterface = {
  categories: Category[];
  updateCategory: (updatedCategory: Category) => void;
  deleteCategory: (categoryId: string) => void;
  addNewCategory: () => void;
  addNewField: (categoryId: string) => void;
};

const useCategory = create(
  persist<CategoryStoreInterface>(
    set => ({
      categories: [],

      addNewCategory: () => {
        const category = {
          id: generateUniqueId(),
          name: '',
          createdAt: new Date(),
          fields: {},
          titleFieldId: '',
        };

        set(state => ({
          categories: [...state.categories, category],
        }));
      },

      updateCategory: updatedCategory => {
        set(state => ({
          categories: state.categories.map(category => {
            if (category.id === updatedCategory.id) {
              return updatedCategory;
            }

            return category;
          }),
        }));
      },

      deleteCategory: categoryId => {
        set(state => ({
          categories: state.categories.filter(
            category => category.id !== categoryId,
          ),
        }));
      },

      addNewField: (categoryId: string) => {
        const field: Field = {
          name: '',
          type: 'text',
        };

        set(state => ({
          categories: state.categories.map(category => {
            if (category.id === categoryId) {
              return {
                ...category,
                fields: {
                  [generateUniqueId()]: field,
                  ...category.fields,
                },
              };
            }

            return category;
          }),
        }));
      },
    }),
    {
      name: 'categories-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useCategory;
