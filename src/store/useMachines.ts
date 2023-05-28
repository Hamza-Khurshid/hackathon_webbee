import {create} from 'zustand';
import {Machine} from '../interfaces';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type MachinesStoreInterface = {
  machines: Machine[];
  addNewMachine: (machineObj: Machine) => void;
  updateMachine: (updatedMachine: Machine) => void;
  deleteMachine: (machineId: string) => void;
  getMachines: (id: string) => Machine[];
  deleteAllMachines: (categoryId: string) => void;
};

const useMachines = create(
  persist<MachinesStoreInterface>(
    (set, get) => ({
      machines: [],
      getMachines: id => {
        return get().machines.filter(machine => machine.categoryId === id);
      },
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

      deleteMachine: machineId => {
        set(state => ({
          machines: state.machines.filter(machine => machine.id !== machineId),
        }));
      },

      deleteAllMachines: (categoryId) => {
        set(state => ({
          machines: state.machines.filter(machine => machine.categoryId !== categoryId),
        }));
      }
    }),
    {
      name: 'machines-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useMachines;
