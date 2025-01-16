import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';

const CaptainCard = () => {
  return (
    <Box
      sx={{
        marginTop: '8rem',
        backgroundColor: '#00d29f',
        padding: '2rem',
        borderRadius: '0 0 50px 50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and above
          alignItems: 'center', // Center the content
          justifyContent: 'center', // Center the content horizontally
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image="/captains.avif" // Ensure the image path is correct
          alt="Captain"
          sx={{
            maxWidth: { xs: '100%', md: '30%' }, // Full width on small screens, 30% on medium+
            borderRadius: '10px',
            marginBottom: { xs: '1rem', md: '0' }, // Add spacing below image on small screens
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            marginLeft: { xs: '0', md: '3rem' }, // Smaller left margin
            textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }, // Center for small screens
            justifyContent: 'center', // Vertically center the content
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '0.5rem', // Space below heading
            }}
          >
            Captains
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'black',
              marginBottom: '1rem', // Space below paragraph
              lineHeight: 1.6,
              fontSize: { xs: '0.9rem', md: '1rem' }, // Smaller font for small screens
              width: { xs: '90%', md: '80%' }, // Limit width to prevent long lines
            }}
          >
            Drive or deliver with Careem and earn with every ride. <br />
            Choose your own hours, enjoy amazing Captain 
            rewards ,and get professional training.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: { xs: '0.7rem', md: '0.8rem' },
              padding: { xs: '0.4rem 1rem', md: '0.5rem 1.2rem' },
              fontWeight: 'italic',
              textTransform: 'none', // Prevents the text from transforming to uppercase
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Read more {/* Text in lowercase */}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CaptainCard;
