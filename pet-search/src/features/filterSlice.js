import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    allPets: [],
    filteredPets: [],
  },
  reducers: {
    filterByPetType: (state, action) => {
      if (action.payload === "all") {
        state.filteredPets = [...state.allPets];
        return;
      }
      state.filteredPets = state.allPets.filter(
        (pet) => pet.type === action.payload
      );
    },
    savePetList: (state, action) => {
      state.allPets = action.payload;
      state.filteredPets = action.payload;
    },
  },
});

export const { filterByPetType, savePetList } = filterSlice.actions;
export const selectPets = (state) => state.filter.filteredPets;
export default filterSlice.reducer;
