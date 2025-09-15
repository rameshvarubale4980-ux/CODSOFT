import React from "react";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5 p-4 border rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Filters</h3>

      {/* Location Filter */}
      <div>
        <h4 className="block text-sm font-medium mb-2">Location</h4>
        <div className="space-y-2">
          <label htmlFor="All" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="All"
              value="All"
              onChange={handleChange}
              defaultChecked
            />
            <span>All</span>
          </label>

          <label htmlFor="pune" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="pune"
              value="pune"
              onChange={handleChange}
            />
            <span>Pune</span>
          </label>

          <label htmlFor="sambhajinagar" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="sambhajinagar"
              value="sambhajinagar"
              onChange={handleChange}
            />
            <span>Sambhajinagar</span>
          </label>

          <label htmlFor="banglore" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="banglore"
              value="Banglore"
              onChange={handleChange}
            />
            <span>Banglore</span>
          </label>

          <label htmlFor="channai" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="channai"
              value="Channai"
              onChange={handleChange}
            />
            <span>Channai</span>
          </label>

          <label htmlFor="mumbai" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="mumbai"
              value="mumbai"
              onChange={handleChange}
            />
            <span>Mumbai</span>
          </label>

          <label htmlFor="nagpur" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location"
              id="nagpur"
              value="Nagpur"
              onChange={handleChange}
            />
            <span>Nagpur</span>
          </label>
        </div>
      </div>

      {/* Salary Filter */}
      <div>
        <h4 className="block text-sm font-medium mb-2">Salary</h4>
        <div className="space-y-2">
          <label htmlFor="30000" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="salary"
              id="30000"
              value="30000"
              onChange={handleChange}
            />
            <span>30000k</span>
          </label>

          <label htmlFor="40000" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="salary"
              id="40000"
              value="40000"
              onChange={handleChange}
            />
            <span>40000k</span>
          </label>

          <label htmlFor="50000" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="salary"
              id="50000"
              value="50000"
              onChange={handleChange}
            />
            <span>50000k</span>
          </label>

          <label htmlFor="70000" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="salary"
              id="70000"
              value="70000"
              onChange={handleChange}
            />
            <span>70000k</span>
          </label>

          <label htmlFor="80000" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="salary"
              id="80000"
              value="80000"
              onChange={handleChange}
            />
            <span>80000k</span>
          </label>
        </div>
      </div>

     
      {/* Remote Jobs Button */}
      <button
        onClick={() => handleClick("remote")}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Remote Jobs
      </button>
    </div>
  );
};

export default Sidebar;
