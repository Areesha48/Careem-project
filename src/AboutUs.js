import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ padding: "2rem 1rem", marginTop: "0rem" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Image Section (Top on Small Screens) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            order: { xs: 1, md: 2 }, // Image on top for small screens, right for medium+
          }}
        >
          <Box
            component="img"
            src="/About_us_updt_e1e14ed645.avif" // Ensure the image path is correct
            alt="About Us"
            sx={{
              width: "100%", // Take full width
              maxWidth: { xs: "90%", sm: "400px", md: "500px" }, // Increased maxWidth for xs
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>

        {/* Text Section (Below Image on Small Screens) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center on all screens
            textAlign: "center", // Center text alignment
            justifyContent: "center", // Center vertically
            order: { xs: 2, md: 1 }, // Text below image for small screens, left for medium+
            minHeight: { md: "400px" }, // Add vertical spacing for laptop screens
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.5rem" }, // Adjust font size for responsiveness
              marginBottom: { xs: "1rem", md: "1.5rem" }, // Add spacing below the heading
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              marginBottom: "1.5rem",
              fontSize: { xs: "0.9rem", md: "1rem" }, // Adjust font size for smaller screens
              lineHeight: { xs: "1.5", md: "1.8" },
              maxWidth: { xs: "90%", md: "80%" }, // Limit paragraph width for better readability
            }}
          >
            Careem’s purpose is to simplify and improve the lives of people and
            build an awesome organisation that inspires. Learn more about our
            purpose, people, and services.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00EB79",
              color: "#2D2E2E",
              textTransform: "none",
              fontSize: { xs: "0.8rem", md: "1rem" }, // Responsive button font size
              padding: { xs: "0.5rem 1rem", md: "0.8rem 1.5rem" }, // Adjust padding
              "&:hover": {
                backgroundColor: "#00EB79",
              },
            }}
          >
            Read more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
