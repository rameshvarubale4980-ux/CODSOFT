import React from "react";

const JobPostingData = ({ handleChange }) => {
  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="text-lg font-bold mb-3 text-gray-800">📅 Date of Posting</h4>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="date"
            value="All"
            onChange={handleChange}
            defaultChecked
          />
          <span>All time</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="date"
            value="24h"
            onChange={handleChange}
          />
          <span>Last 24 hours</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="date"
            value="7d"
            onChange={handleChange}
          />
          <span>Last 7 days</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="date"
            value="1m"
            onChange={handleChange}
          />
          <span>Last 1 month</span>
        </label>
      </div>
    </div>
  );
};

export default JobPostingData;
