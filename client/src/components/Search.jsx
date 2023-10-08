import React, { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Search() {
  const [results, setResults] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  
  async function fetchSearchResults(query) {
    try {
      const response = await Axios.get("http://localhost:8000/courses/search", {
        params: {
          q: query,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
	// Initailize Courses (example)
	setCourses([{label: 'nus cs'},{label: 'ntu cs'}])

    const timer = setTimeout(() => {
      if (query) {
        fetchSearchResults(query);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{   
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "300px",}}>
		  <Autocomplete
			disablePortal
			id="courses"
			options={courses}
			sx={{ width:500}}
			renderInput={(params) => <TextField {...params} label="Explore Courses" />}
		  />
	</div>

    // <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
    //   <input
    //     type="text"
    //     value={query}
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    //   {results.length > 0 && (
    //     <div>
    //       <ul>
    //         {results.map((result, index) => (
    //           <li key={index}>
    //             <Link to={`/courses/${result.course_name}`}>
    //               {result.course_name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
}

export default Search;
