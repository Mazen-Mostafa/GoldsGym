import { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ExerciseContext } from "../App";

const SearchExercises = () => {
  const { bodyPart, setBodyPart, setExercises, exercises } =
    useContext(ExerciseContext);

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        exerciseOptions
      );
      setBodyParts(["all", ...data]);
      setExercises(exercisesData);
    };
    getData();
    Aos.init({ duration: 2500 });
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col items-center justify-center mt-20"
    >
      <p className="font-[600] sm:text-[35px] text-[27px] text-center mb-5">
        Enjoy Our Free Program, Search , Discover <br /> Our Exercises
        Categories :)
      </p>
      <div className="flex flex-col items-center sm:flex-row gap-[30px]">
        <input
          className=" sm:h-[60px] h-[40px] mr-4 lg:w-[700px] w-[300px] 
          focus:outline-none rounded-[10px] shadow-sm p-4 border-solid border-[1px] border-[#b9b7b7]"
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
        <button
          className="text-[#fff] transition-all flex justify-center items-center px-6 sm:h-[60px] h-[40px]
        py-4 rounded-[10px] sm:text-[18px] text-[14px] shadow-md hover:bg-[#8f0303] bg-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="relative p-5 ">
        {bodyParts.length > 1 && (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        )}
      </div>
    </section>
  );
};

export default SearchExercises;
