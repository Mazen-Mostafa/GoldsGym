import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import { createContext } from "react";
import { useState } from "react";
export const ExerciseContext = createContext({
  exercises: [],
  setExercises: () => {},
  bodyPart: "all",
  setBodyPart: () => {},
  currentData: [],
  setCurrentData: () => {},
});

function App() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        setExercises,
        bodyPart,
        setBodyPart,
      }}
    >
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ExerciseContext.Provider>
  );
}

export default App;
