import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Loader from "./Loader";

const ExcerciseCard = ({ exercise }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Link
      className="p-5 mb-3 sm:mb-0 exercise-card"
      to={`/exercise/${exercise.id}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {exercise ? (
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      ) : (
        <Loader />
      )}
      <div className="flex items-center">
        <button className="  text-[#fff] bg-[#ffa9a9] px-2 py-1 text-[14px] rounded-[20px]">
          {exercise.bodyPart}
        </button>
        <button className=" ml-[20px] text-[#fff] bg-[#f1a841] px-2 py-1 text-[14px] rounded-[20px]">
          {exercise.target}
        </button>
      </div>
      <p className="mt-3 mb-3 text-[18px] capitalize">{exercise.name}</p>
    </Link>
  );
};

export default ExcerciseCard;
