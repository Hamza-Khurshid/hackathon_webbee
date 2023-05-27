import {create} from 'zustand';
import {generateUniqueId} from '../utils/uniqueId';
import {Category, Field, Machine} from '../interfaces';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type MachinesStoreInterface = {
  machines: Machine[];
  addNewMachine: (machineObj: Machine) => void;
  updateMachine: (updatedMachine: Machine) => void;
  deleteMachine: (machineId: string) => void;
};

const useMachines = create(
  persist<MachinesStoreInterface>(
    set => ({
      machines: [],

      addNewMachine: machineObj => {
        set(state => ({
          machines: [...state.machines, machineObj],
        }));
      },

      updateMachine: updatedMachine => {
        set(state => ({
          machines: state.machines.map(machine => {
            if (machine.id === updatedMachine.id) {
              return updatedMachine;
            }

            return machine;
          }),
        }));
      },


      deleteMachine: (machineId) => {
        set(state => ({
          machines: state.machines.filter(machine => machine.id !== machineId),
        }));
      },


      // updateCategory: (updatedCategory) => {

      //   set(state => ({
      //     categories: state.categories.map(category => {
      //       if (category.id === updatedCategory.id) {
      //         return updatedCategory;
      //       }

      //       return category;
      //     }),
      //   }));

      // },

      // deleteCategory: (categoryId) => {
      //   set(state => ({
      //     categories: state.categories.filter(category => category.id !== categoryId),
      //   }));
      // },

      // addNewField: (categoryId: string) => {
      //   const field:Field = {
      //     name: '',
      //     type: 'text',
      //     isTitleField: false,
      //   };

      //   set(state => ({
      //     categories: state.categories.map(category => {
      //       if (category.id === categoryId) {
      //         return {
      //           ...category,
      //           fields: {
      //             [generateUniqueId()]: field,
      //             ...category.fields,

      //           },
      //         };
      //       }

      //       return category;
      //     }),
      //   }));
      // }
    }),
    {
      name: 'machines-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useMachines;
