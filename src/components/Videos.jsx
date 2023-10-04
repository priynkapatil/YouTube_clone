import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ Videos,direction,justifyContent,alignItems }) => {
  if(!Videos?.length) return 'Loading...'
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent||"start"}
      alignItems={alignItems||"start"}
      gap={2}
    >
      {Videos?.map((item, idx) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
