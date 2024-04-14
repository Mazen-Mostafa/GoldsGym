import { Stack, Box, Typography } from "@mui/material";
import Loader from "./Loader";
import Aos from "aos";
import { useEffect } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetData, equipmentData }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
        data-aos="fade-up"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack
        data-aos="fade-up"
        direction="row"
        sx={{ p: 2, position: "relative" }}
      >
        {targetData.length !== 0 ? (
          <HorizontalScrollbar data={targetData} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        data-aos="fade-up"
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px", mt: "80px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Exercises{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          that use the same
        </span>{" "}
        Equipment
      </Typography>
      <Stack
        data-aos="fade-up"
        direction="row"
        sx={{ p: 2, position: "relative" }}
      >
        {targetData.length !== 0 ? (
          <HorizontalScrollbar data={targetData} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
