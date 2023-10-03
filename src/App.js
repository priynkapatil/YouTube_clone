import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar,Feed,VideoDetails,ChannelDetail,SearchFeed } from './components';
const App = () => {
  return (
<BrowserRouter>
    <Box sx= {{background: '#000'}}>
       <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
    </Box>
</BrowserRouter>
    )
}

export default App