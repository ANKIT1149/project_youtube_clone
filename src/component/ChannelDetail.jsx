import React from 'react'

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Video from './Video';

import ChannelCard from './ChannelCard';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';


const ChannelDetail = () => {
      
  const[channeldetail, setChannelDetail] = useState(null);

  const [videos,setvideos] = useState([])

  const {id} = useParams()

  // console.log(channeldetail)
   
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setvideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channeldetail={channeldetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Video videos={videos} />
      </Box>
    </Box> 
    </> 
  )
}

export default ChannelDetail
