import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingData from "./JobPostingData";

const Sidebar = ({ handleChange, handleClick }) => {
  console.log("👉 Sidebar component rendered");

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />

      {console.log("👉 JobPostingData loaded")}
      <JobPostingData handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
