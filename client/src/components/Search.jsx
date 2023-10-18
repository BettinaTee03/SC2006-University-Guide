import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/Search.css";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Search({ pageTitle, renderOptionContent, selectedCourses }) {
  const [results, setResults] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const API_BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  useEffect(() => {
    async function fetchAllCourses() {
      try {
        const response = await Axios.get(`${API_BASE_URL}/courses/all`);
        setResults(response.data);
      } catch (error) {
        return [];
      }
    }
    fetchAllCourses();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isCourseSelected = (courseName) => {
    return selectedCourses.some(
      (selectedCourse) => selectedCourse.course_name === courseName
    );
  };

  return (
    <>
      <Grid item xs={12}>
        <Autocomplete
          disablePortal
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="combo-box-demo"
          options={results}
          filterOptions={(options, state) => {
            const inputValue = state.inputValue.toLowerCase();
            if (inputValue === "") {
              return [];
            }
            const filteredOptions = options
              .filter((option) =>
                option.course_name.toLowerCase().includes(inputValue)
              )
              .sort((a, b) => {
                const aIndex = a.course_name.toLowerCase().indexOf(inputValue);
                const bIndex = b.course_name.toLowerCase().indexOf(inputValue);
                return aIndex - bIndex;
              });
            return filteredOptions.slice(0, 10);
          }}
          noOptionsText={
            inputValue === "" ? "Searching..." : "No search results"
          }
          getOptionLabel={(option) => option.course_name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Course..."
              className="custom-label"
            />
          )}
          renderOption={(props, option) => {
            const content = renderOptionContent(option);
            return (
              <div
                {...props}
                className={`${
                  isCourseSelected(option.course_name)
                    ? "selected search-link-selected"
                    : "search-link"
                }`}
              >
                {content}
              </div>
            );
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="left" className="custom-header">
          {pageTitle}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <TableBody>
              {results
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((course) => (
                  <TableRow key={course.course_name}>
                    <TableCell
                      style={{
                        wordWrap: "break-word",
                        padding: "0",
                      }}
                      className={
                        isCourseSelected(course.course_name) ? "selected" : ""
                      }
                    >
                      <div
                        className={`${
                          isCourseSelected(course.course_name)
                            ? "selected all-link-selected"
                            : "all-link"
                        }`}
                      >
                        {renderOptionContent(course)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12}>
        <Stack
          sx={{
            justifyContent: "center",
          }}
        >
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: { xs: "14px", sm: "1rem" },
                minWidth: { xs: "28px", sm: "40px" },
                minHeight: { xs: "28px", sm: "40px" },
                borderRadius: "50%",
                marginBottom: "30px",
              },
            }}
            count={Math.floor(results.length / rowsPerPage)} // Calculate the number of pages
            page={page}
            onChange={handleChangePage}
            className="custom-pagination"
            siblingCount={1}
          />
        </Stack>
      </Grid>
    </>
  );
}

export default Search;
