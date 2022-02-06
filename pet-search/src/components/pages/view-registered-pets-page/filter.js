import React, { Component } from "react";
import { useDispatch } from "react-redux";
import {
  filterByPetType,
  filterByStartDate,
  filterByEndDate,
  filterByGender,
} from "../../../store/filterSlice";

function FilterSideBar(props) {
  const dispatch = useDispatch();

  const onTypeChange = (e) => {
    dispatch(filterByPetType(e.target.value));
  };

  const onStartDateChange = (e) => {
    dispatch(filterByStartDate(e.target.value));
  };

  const onEndDateChange = (e) => {
    dispatch(filterByEndDate(e.target.value));
  };

  const onGenderChange = (e) => {
    dispatch(filterByGender(e.target.value));
  };

  return (
    <div className="w-72 space-y-8 mt-4">
      <div className="text-xl font-bold text-center">
        {props.type === "lost" ? "Lost pets" : "Found pets"} filters
        <hr />
      </div>

      <div className="md:ml-4 text-center md:text-left">
        <p>
          <label className="font-semibold">Type of pet</label>
          <select
            defaultValue="all"
            className="w-48 h-8 border-1"
            onChange={onTypeChange}
          >
            <option key="cat" value="cat">
              cat
            </option>
            <option key="dog" value="dog">
              dog
            </option>
            <option key="bunny" value="bunny">
              bunny
            </option>
            <option key="all" value="all">
              all types
            </option>
          </select>
        </p>
      </div>
      <div>
        <div className="md:ml-4 text-center">
          <span>
            <label className="font-semibold">From Date:</label>
            <br />
            <input
              onChange={onStartDateChange}
              type="date"
              className="w-48 h-8 border-1"
            ></input>
          </span>
          <br />
          <br />
          <span>
            <label className="font-semibold">Till Date:</label>
            <br />
            <input
              onChange={onEndDateChange}
              type="date"
              className="w-48 h-8 border-1"
            ></input>
          </span>
        </div>
      </div>
      <div>
        <div className="md:ml-4 text-center">
          <label className="mb-1 font-semibold">Gender:</label>
          <br />
          <select
            defaultValue="all"
            className="w-48 h-8 border-1"
            onChange={onGenderChange}
          >
            <option key="male" value="male">
              male
            </option>
            <option key="female" value="female">
              female
            </option>
            <option key="all" value="all">
              all
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default class Filter extends Component {
  render() {
    return <FilterSideBar />;
  }
}
