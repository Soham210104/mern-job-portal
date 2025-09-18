
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    description,
  } = data;

  // Fallback image if logo fails
  const handleImgError = (e) => {
    e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  };

  return (
    <div className="transition-shadow hover:shadow-lg">
      <section className="card bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row gap-6 items-start">
        <Link to={`/jobs/${_id}`} className="flex gap-6 flex-col sm:flex-row items-start w-full">
          <img
            src={companyLogo}
            alt={jobTitle}
            className="w-20 h-20 object-contain rounded border bg-gray-50"
            onError={handleImgError}
          />
          <div className="card-details w-full">
            <h4 className="text-primary font-semibold text-lg mb-1">{companyName}</h4>
            <h3 className="text-xl font-bold mb-2 text-blue">{jobTitle}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-4 mb-3">
              <span className="flex items-center gap-2">
                <FiMapPin /> {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {employmentType}
              </span>
              <span className="flex items-center gap-2">
                <FiDollarSign /> ${minPrice}k - ${maxPrice}k
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {postingDate}
              </span>
            </div>

            <p className="text-base text-primary/80 line-clamp-3">{description}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
