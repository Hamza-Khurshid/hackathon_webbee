import {create} from 'zustand';

const useCategory = create(set => ({
  categories: [],
}));

export default useCategory;
