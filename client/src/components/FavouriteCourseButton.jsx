import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

export const FavouriteCourseButton = ({ isIconClicked, onClick }) => {
  return (
    <Button onClick={onClick} sx={{ border: 0 }}>
      {isIconClicked ? (
        <FavoriteIcon sx={{ fontSize: 35, color: "secondary.main" }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: 35 }} />
      )}
    </Button>
  );
};

export default FavouriteCourseButton;
