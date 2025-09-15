import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;

  return (
    <section className="p-4 border rounded shadow-sm hover:shadow-md transition bg-white">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        {/* Company Logo */}
        <img
          src={companyLogo}
          alt={`${companyName} logo`}
          className="w-16 h-16 object-contain"
        />

        {/* Job Info */}
        <div>
          <h2 className="text-lg font-semibold">{jobTitle}</h2>
          <p className="text-sm text-gray-600">{companyName}</p>
          <p className="text-xs text-gray-500">{jobLocation}</p>
          <p className="text-xs text-gray-500">
            {minPrice} - {maxPrice} {salaryType}
          </p>
          <p className="text-xs text-gray-400">{employmentType}</p>
          <div>
            <span className='flex item-center gap-2'><FiClock /> {employmentType}</span>
            <span className='flex item-center gap-2'><FiDollarSign /> {minPrice}</span>
            <span className='flex item-center gap-2'><FiCalendar /> {postingDate}</span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
