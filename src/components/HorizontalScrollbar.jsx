// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { Box, Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';
// import BodyPart from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//     {data.map((item) => (
//       <Box
//         key={item.id || item}
//         itemID={item.id || item}
//         title={item.id || item}
//         m="0 40px"
//       >
//         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
//       </Box>
//     ))}
//   </ScrollMenu>
// );

// export default HorizontalScrollbar;
import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollRef = useRef(null);

  // Function to scroll left/right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 150 : 300; // Adjust for responsiveness
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden", p: 2 }}>
      {/* Left Scroll Button */}
      <Button
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "#fff",
          borderRadius: "50%",
          minWidth: "40px",
          height: "40px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        }}
      >
        <img src={LeftArrowIcon} alt="left-arrow" width="20px" />
      </Button>

      {/* Scrollable Content */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          p: 2,
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome
        }}
      >
        {data.map((item) => (
          <Box key={item.id || item} sx={{ minWidth: "200px", flexShrink: 0 }}>
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>

      {/* Right Scroll Button */}
      <Button
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "#fff",
          borderRadius: "50%",
          minWidth: "40px",
          height: "40px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        }}
      >
        <img src={RightArrowIcon} alt="right-arrow" width="20px" />
      </Button>
    </Box>
  );
};

export default HorizontalScrollbar;
