import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Result for: <span
          style={{
            color: "#F31503",
          }}
        >
        {searchTerm}
        </span> Video
      </Typography>
      <Videos Videos={videos} />
    </Box>
  );
};

export default SearchFeed;
