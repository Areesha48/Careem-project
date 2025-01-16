// src/components/Features.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const features = [
  { title: 'Ride', description: 'Book a ride to your destination' },
  { title: 'Delivery', description: 'Get your items delivered' },
  { title: 'Food', description: 'Order food from top restaurants' },
];

const Features = () => {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{feature.title}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
