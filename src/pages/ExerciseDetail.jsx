import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, videoOptions } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        videoOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleData = await fetchData(
        `${exerciseUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetData(targetMuscleData);

      const equipmentData = await fetchData(
        `${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentData(equipmentData);
    };
    fetchExerciseData();
  }, [id]);
  console.log(exerciseVideos);
  return (
    <div>
      <Details exerciseDetails={exerciseDetails} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />

      <SimilarExercises targetData={targetData} equipmentData={equipmentData} />
    </div>
  );
};

export default ExerciseDetail;
