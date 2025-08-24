import { create } from "zustand";

type Store = {
  listOfItem: string[];
  addToList: (newItem: string) => void;
  removeFromList: (id: number) => void;
  newTaskValue: string;
  addNewTaskValue: (task: string) => void;
};

const useStore = create<Store>((set) => ({
  listOfItem: ["take cup of tea"],
  newTaskValue: "",

  addToList: (newItem: string) =>
    set((state) => ({
      listOfItem: [newItem, ...state.listOfItem],
    })),

  removeFromList: (id: number) =>
    set((state) => ({
      listOfItem: state.listOfItem.filter(
        (_: string, index: number) => index != id
      ),
    })),

  addNewTaskValue: (task: string) =>
    set(() => ({
      newTaskValue: task,
    })),
}));

export default useStore;
