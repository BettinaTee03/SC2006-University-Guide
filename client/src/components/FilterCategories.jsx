import React, { useState } from 'react';

import '../FilterCategories.css';

import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import Button from "@mui/material/Button";

function FilterCategories({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState(categories.map((category) => category.id));
  const [expand, setExpand] = useState();

  const handleCheckboxChange = (categoryId) => {
    let updatedCategories;

    if (categoryId === 'selectAll') {
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
    <Grid container columnSpacing={1} rowSpacing={1} className="filter-container">
      <Button className="filter-heading" onClick={() => setExpand(!expand)}>
        Filter Categories
      </Button>

      <Collapse in={expand}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.length === categories.length}
                onChange={() => handleCheckboxChange('selectAll')}
                color="primary"
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
                  color="primary"
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
