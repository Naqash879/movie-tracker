import { create } from "zustand";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const useAddUserStore = create((set) => ({
  user: [],
  name: "",
  age: 0,
  searchInput: "", // state variable for search input
  searchData: [], // array to store search results
  setSearch: (value) => set({ searchInput: value }), // setter function

  setName: (value) => set({ name: value }),

  setAge: (value) => set({ age: value }),

  AddUser: () =>
    set((state) => {
      if (state.name.trim() === "") {
        toast.error("Please provide valid name");
        return {}; // state ko change mat karo
      }
      if (state.age <= 0) {
        toast.error("Please provide valid age");
        return {}; // state ko change mat karo
      }
      const newUserList = [...state.user, { name: state.name, age: state.age }];

      Cookies.set("userData", JSON.stringify(newUserList));

      return {
        user: newUserList,
        name: "",
        age: 0,
      };
    }),
  DeleteUser: (index) =>
    set((state) => {
      const newUserList = state.user.filter((_, i) => i !== index);

      Cookies.set("userData", JSON.stringify(newUserList));

      return {
        user: newUserList,
      };
    }),
  UpdateUser: (index, newData) =>
    set((state) => {
      const newUserList = state.user.map((user, i) =>
        i === index ? { ...user, ...newData } : user
      );
      Cookies.set("userData", JSON.stringify(newUserList));

      return {
        toast: toast.success("User updated successfully!"),
        user: newUserList,
      };
    }),
  SearchUser: () =>
    set((state) => {
      if (state.searchInput.trim() === "") {
        toast.error("Please enter a name");
        return { searchData: [] };
      }
      const result = state.user.filter((u) =>
        u.name.toLowerCase().includes(state.searchInput.toLowerCase())
      );
      return { searchData: result };
    }),

  loadUserFromCookie: () => {
    const cookieData = Cookies.get("userData");
    if (cookieData) {
      const parsed = JSON.parse(cookieData);
      set({ user: parsed });
    }
  },
}));
