import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelCard, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(videos,'videos');

  useEffect(() => {
   fetchFromAPI(`channels?part=snippet&id=${id}`)
   .then((data) => setChannelDetail(data?.items[0]));

   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
   .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'280px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos Videos={videos} justifyContent="center"
      alignItems="center"/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;