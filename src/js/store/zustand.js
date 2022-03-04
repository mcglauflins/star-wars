import create from "zustand";

const useStore = create((set) => ({
  data: [{ background: "#888", initial: "#345", title: "This is a title." }],
  addData: (item) => {
    data.concat([item]);
  },
  removeData: (itemName) =>
    set({
      data: data.filter((dataItem) => {
        return dataItem.name !== itemName;
      }),
    }),
}));

export default useStore;
