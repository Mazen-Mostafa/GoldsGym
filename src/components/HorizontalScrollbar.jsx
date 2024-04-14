import BodyPart from "./BodyPart";
import { useState, useRef, useContext } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import ExcerciseCard from "./ExcerciseCard";
import { Hidden } from "@mui/material";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    // Calculate the maximum scrollable distance
    const maxScrollLeft =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;

    // Calculate the new scroll position within boundaries
    const newScrollPosition = Math.min(
      Math.max(scrollPosition + scrollAmount, 0),
      maxScrollLeft
    );

    // Update the state with the adjusted scroll position
    setScrollPosition(newScrollPosition);

    // Set the container element's scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="container flex flex-col items-center justify-center mt-[50px]">
      <div
        ref={containerRef}
        style={{
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="lg:w-[1250px] sm:w-[600px] w-[350px] flex items-center gap-[20px]">
          {data.map((item) =>
            isBodyParts ? (
              <BodyPart
                key={item}
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExcerciseCard exercise={item} />
            )
          )}
        </div>
      </div>

      <div className="action-btns">
        <button onClick={() => handleScroll(-1280)}>
          <img src={leftArrow} alt="arrow" />
        </button>
        <button onClick={() => handleScroll(1280)}>
          <img src={rightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
