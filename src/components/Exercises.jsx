import { useState, useEffect, useRef } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useContext } from "react";
import { ExerciseContext } from "../App";
import ExcerciseCard from "./ExcerciseCard";
import { Pagination, Stack } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const Exercises = ({}) => {
  const { exercises, setExercises, bodyPart } = useContext(ExerciseContext);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      const ExData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        exerciseOptions
      );

      if (bodyPart === "all") {
        exercisesData = ExData;
      } else {
        exercisesData = ExData.filter((part) => part.bodyPart === bodyPart);
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <div
      id="exercises"
      className="lg:mt-[110px] mt-[50px] flex flex-wrap items-center flex-col"
      data-aos="fade-up"
    >
      <h3 className="text-[35px] font-semibold mb-10 ">
        {!exercises.length > 0 ? `Couldn't Find Your Excercises` : ""}
      </h3>
      {exercises.length > 0 ? (
        <div
          className="w-[200px] mb-10 py-3 bg-[white] border-t-4 border-b-4
        border-solid border-[#e97979] rounded-[20px] flex flex-col items-start justify-center"
        >
          <div className="flex items-center p-3">
            <span className=" p-4 text-[white] rounded-full bg-[#ffa9a9]"></span>
            <p>{`> Body Part`}</p>
          </div>
          <div className="flex items-center p-3">
            <span className=" p-4 text-[white] rounded-full bg-[#f1a841]"></span>
            <p>{`> Target Muscle`}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" gap-[30px] flex flex-wrap justify-center">
        {currentExercises.map((exercise) => (
          <ExcerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>

      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </div>
  );
};

export default Exercises;
