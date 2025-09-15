import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Jobs from "../components/jobs";
import Sidebar from "../components/sidebar";
import NewsLetter from "../components/Newsletter";

// -------- Helper function for Date Filter --------
const checkDateFilter = (selected, postingDate) => {
  if (!postingDate) return false;
  const jobDate = new Date(postingDate);
  const now = new Date();

  if (selected === "24h") {
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    return jobDate >= yesterday;
  }

  if (selected === "7d") {
    const lastWeek = new Date();
    lastWeek.setDate(now.getDate() - 7);
    return jobDate >= lastWeek;
  }

  if (selected === "1m") {
    const lastMonth = new Date();
    lastMonth.setMonth(now.getMonth() - 1);
    return jobDate >= lastMonth;
  }

  return false;
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch jobs.json from public/ folder
  useEffect(() => {
    setIsLoading(true);
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setIsLoading(false);
      });
  }, []);

  // Input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleClick = (value) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  // -------- Main filter function --------
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Search by jobTitle
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category (location, salary, employmentType, date)
    if (selected && selected !== "All") {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, salaryType, employmentType, postingDate }) =>
          jobLocation?.toLowerCase() === selected.toLowerCase() ||
          salaryType?.toLowerCase() === selected.toLowerCase() ||
          employmentType?.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) >= parseInt(selected) ||
          checkDateFilter(selected, postingDate) 
      );
    }

    return filteredJobs;
  };

  const result = filteredData(jobs, selectedCategory, query);

  // Pagination helpers
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(result.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Apply pagination
  const { startIndex, endIndex } = calculatePageRange();
  const paginatedResult = result.slice(startIndex, endIndex);

  return (
    <div>
      {/* Search banner */}
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main content in 3 columns */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Left - Sidebar */}
        <div className="bg-white p-4 rounded shadow">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Middle → Jobs list */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          {isLoading ? (
            <p>Loading....</p>
          ) : paginatedResult.length > 0 ? (
            <>
              <Jobs result={paginatedResult} />

              {/* Pagination */}
              <div className="flex justify-center mt-4 space-x-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="hover:underline disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="mx-2">
                  Page {currentPage} of{" "}
                  {Math.ceil(result.length / itemsPerPage)}
                </span>

                <button
                  onClick={nextPage}
                  disabled={
                    currentPage === Math.ceil(result.length / itemsPerPage)
                  }
                  className="hover:underline disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p>No data found</p>
          )}
        </div>

        {/* Right */}
        <div className="bg-white p-4 rounded shadow">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
