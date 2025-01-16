import React from 'react';
import { Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
      >
        <source src="/2023_05_05_Careem_New_Brand_Video_Cutdown_04_1920_X1080_Online_Mix_851c26c68a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography variant="h4" style={{ marginTop: '10px', fontWeight: 'bold' }}>
        The everything app
      </Typography>
    </div>
  );
};

export default HeroSection;

