import { createSlice } from "@reduxjs/toolkit";
import * as dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    allPets: [],
    filteredPets: [],
    petType: "all",
    startDate: null,
    endDate: null,
    gender: "all",
  },
  reducers: {
    filterByPetType: (state, action) => {
      state.petType = action.payload;
      state.filteredPets = filterPets(
        state.allPets,
        state.petType,
        state.startDate,
        state.endDate,
        state.gender
      );
    },
    filterByStartDate: (state, action) => {
      state.startDate = action.payload;
      state.filteredPets = filterPets(
        state.allPets,
        state.petType,
        state.startDate,
        state.endDate,
        state.gender
      );
    },
    filterByEndDate: (state, action) => {
      state.endDate = action.payload;
      state.filteredPets = filterPets(
        state.allPets,
        state.petType,
        state.startDate,
        state.endDate,
        state.gender
      );
    },
    filterByGender: (state, action) => {
      state.gender = action.payload;
      state.filteredPets = filterPets(
        state.allPets,
        state.petType,
        state.startDate,
        state.endDate,
        state.gender
      );
    },
    savePetList: (state, action) => {
      state.allPets = action.payload;
      state.filteredPets = action.payload;
    },
  },
});

const filterPets = (allPets, petType, startDate, endDate, gender) => {
  let filteredList = [...allPets];

  if (petType !== "all") {
    filteredList = filteredList.filter((pet) => pet.type === petType);
  }

  if (startDate) {
    filteredList = filteredList.filter((pet) =>
      dayjs(pet.date).isSameOrAfter(dayjs(startDate))
    );
  }

  if (endDate) {
    filteredList = filteredList.filter((pet) =>
      dayjs(pet.date).isSameOrBefore(dayjs(endDate))
    );
  }

  if (gender !== "all") {
    filteredList = filteredList.filter((pet) => pet.gender === gender);
  }

  return filteredList;
};

export const {
  filterByPetType,
  filterByStartDate,
  filterByEndDate,
  filterByGender,
  savePetList,
} = filterSlice.actions;
export const selectPets = (state) => state.filter.filteredPets;
export default filterSlice.reducer;
