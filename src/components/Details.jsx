import bodyPartImg from "../assets/body-part.png";
import targetImg from "../assets/target.png";
import equipmentImg from "../assets/equipment.png";
import { Stack, Box, Button, Typography } from "@mui/material";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetail = [
    {
      icon: bodyPartImg,
      name: bodyPart,
      description: "Body Part:",
    },
    {
      icon: targetImg,
      name: target,
      description: "Target Muscle:",
    },
    {
      icon: equipmentImg,
      name: equipment,
      description: "Exercise Equipments:",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "24px", xs: "18px" },
            maxWidth: { md: "550px", xs: "300px" },
          }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span
            className="text-primary"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </span>{" "}
          is one of the best exercises to target your{" "}
          <span
            className="text-primary"
            style={{ textTransform: "capitalize" }}
          >
            {target}
          </span>
          . It will help you to improve your mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <p className=" text-[#ff826d]">
              {item.description}
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "30px", xs: "20px" }, color: "black" }}
              >
                {item.name}
              </Typography>
            </p>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
