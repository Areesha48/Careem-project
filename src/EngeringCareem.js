import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

const EngeringCareem = () => {
  return (
    <Box sx={{ padding: "2rem 1rem", marginTop: "4rem" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Image Section */}
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
            src="/Engeringatcareemimg.avif" // Ensure the image path is correct
            alt="Engeringcareem"
            sx={{
              width: "100%", // Take full width
              maxWidth: { xs: "90%", sm: "100%", md: "500px" }, // Larger image on mobile, limit on larger screens
              height: { xs: "auto", sm: "auto", md: "auto" }, // Adjust image size on smaller screens
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center content for all screen sizes
            textAlign: "center", // Center text for all screen sizes
            order: { xs: 2, md: 1 }, // Text below image for small screens, left for medium+
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" }, // Adjust font size for responsiveness
            }}
          >
            Engineering at Careem
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              marginBottom: "1.5rem",
              fontSize: { xs: "1rem", md: "1.2rem" }, // Adjust font size for smaller screens
              lineHeight: { xs: "1.5", md: "1.8" },
            }}
          >
            Careem is creating cutting-edge technology every day
            across five tech sites in Europe and the MENAP region,
            in a mission to build a lasting tech institution that inspires.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00EB79",
              color: "#2D2E2E",
              textTransform: "none",
              fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive button font size
              padding: { xs: "0.6rem 1.2rem", md: "0.8rem 1.5rem" }, // Adjust padding
            }}
          >
            Read more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EngeringCareem;
