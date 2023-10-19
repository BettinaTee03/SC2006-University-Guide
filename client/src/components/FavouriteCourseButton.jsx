import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

export const FavouriteCourseButton = ({ isIconClicked, onClick }) => {
  return (
    <Button onClick={onClick}>
      {isIconClicked ? (
        <FavoriteIcon sx={{ fontSize: 40 }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      )}
    </Button>
  );
};

export default FavouriteCourseButton;