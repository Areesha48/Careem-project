import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';

const SocialImpact = () => {
  return (
    <Box
      sx={{
        marginTop: '4rem', // Reduced margin for better responsiveness
        padding: '2rem',
        borderRadius: '0 0 50px 50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
          alignItems: 'center',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image="/socialimpact.avif" // Ensure the path to the image is correct
          alt="Captain"
          sx={{
            width: { xs: '90%', sm: '80%', md: '30%' }, // Make image larger on mobile devices
            height: { xs: 'auto', md: 'auto' }, // Maintain image aspect ratio on mobile
            borderRadius: '10px',
            marginBottom: { xs: '1rem', md: '0' }, // Add spacing below image for small screens
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            textAlign: 'center', // Center the text for all screen sizes
            marginLeft: { md: '3rem' }, // Space between image and text on larger screens
            width: { xs: '100%', md: '60%' }, // Adjust text section width
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
            }}
          >
            Our social impact
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'black',
              marginTop: '0.5rem',
              fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size for text
              lineHeight: { xs: '1.5', md: '1.8' }, // Adjust line height for readability
            }}
          >
            We believe deeply in driving social and economic progress across the
            region. We use our app to connect customers to the communities that
            need the most support.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00EB79',
              color: '#2D2E2E',
              marginTop: '1rem',
              fontWeight: 'italic',
              fontSize: { xs: '0.8rem', md: '1rem' }, // Responsive button text size
              padding: { xs: '0.5rem 1rem', md: '0.8rem 1.5rem' }, // Responsive padding
              textTransform: "none",
            }}
          >
            Read more
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default SocialImpact;
