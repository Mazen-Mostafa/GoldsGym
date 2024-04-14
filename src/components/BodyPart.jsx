import { Stack } from "@mui/material";
import icon from "../assets/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      className={`flex items-center sm:min-w-[250px] min-w-full justify-center bodyPart-card`}
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: `20px`,
        height: "260px",
        cursor: `pointer`,
        gap: "45px",
        userSelect: "none",
        transition: "0.3s",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="icon" className="w-[40px] h-[40px]" />
      <p className="text-[22px]">{item}</p>
    </Stack>
  );
};

export default BodyPart;
