import React, { useState } from "react";

import "../css/FilterCategories.css";

import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

function FilterCategories({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((category) => category.id)
  );
  const [expand, setExpand] = useState();

  const handleCheckboxChange = (categoryId) => {
    let updatedCategories;

    if (categoryId === "selectAll") {
      if (selectedCategories.length === categories.length) {
        updatedCategories = [];
      } else {
        updatedCategories = categories.map((category) => category.id);
      }
    } else {
      updatedCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter((id) => id !== categoryId)
        : [...selectedCategories, categoryId];
    }

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <Grid
      container
      rowSpacing={1}
      className="filter-container"
      sx={{ marginTop: "12px" }}
    >
      <Button
        className="filter-heading"
        fullWidth
        sx={{
          boxSizing: "border-box",
          color: "primary",
          fontWeight: 900,
          fontSize: "1rem",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "36px",
          width: "100%",
        }}
        onClick={() => setExpand(!expand)}
      >
        Filter Categories
      </Button>

      <Collapse in={expand}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.length === categories.length}
                onChange={() => handleCheckboxChange("selectAll")}
                color="secondary"
              />
            }
            label="Select All"
            className="checkbox-label"
          />
        </Grid>
        {categories.map((category) => (
          <Grid item xs={12} key={category.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCheckboxChange(category.id)}
                  color="secondary"
                />
              }
              label={category.name}
              className="checkbox-label"
            />
          </Grid>
        ))}
      </Collapse>
    </Grid>
  );
}

export default FilterCategories;
