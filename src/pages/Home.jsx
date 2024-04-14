import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import Programs from "../components/Programs";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Programs />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
