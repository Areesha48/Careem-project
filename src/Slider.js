import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

// Sample Banner Data
const bannerData = [
  {
    id: 1,
    image: "/slider1.avif",
    title: "Enjoy unlimited free delivery on groceries",
    subtitle: "",
  },
  {
    id: 2,
    image: "/slider2.avif",
    title: "Most members save AED 300+ every month ",
    subtitle: "",
  },
  {
    id: 3,
    image: "/slider3.avif",
    title: "Get instant 10% back on Rides & Hala texi",
    subtitle: "",
  },
  {
    id: 4,
    image: "/slider5.avif",
    title: "Enjoy unlimited free delivery on food",
    subtitle: "",
  },
  {
    id: 5,
    image: "/slider5.avif",
    title: "Get priority support from our top agents",
    subtitle: "",
  },
  {
    id: 6,
    image: "/slider6.avif",
    title: "Get 10% of laundary",
    subtitle: "",
  },
  {
    id: 7,
    image: "/slider7.avif",
    title: "Get up to 50% of your DineOut biils",
    subtitle: "",
  },
];

// Banner Component
const Banner = ({ image, title, subtitle }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center", // Center items vertically
        justifyContent: "center", // Center items horizontally
        backgroundColor: "#004d40",
        borderRadius: "12px",
        padding: isMobile ? "1rem" : "2rem",
        flexDirection: isMobile ? "column" : "row", // Stack items on mobile
        color: "white",
       
        width: "100%",
        maxWidth: "90%", // Add margin around the banner for responsiveness
        margin: "auto", // Center the banner horizontally
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "10rem", // Add marginTop to the banner
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          textAlign: isMobile ? "center" : "left",
          marginBottom: isMobile ? "1rem" : "0",
          flex: 1, // Let text take equal space
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: isMobile ? "90%" : "60%", // Adjust width for responsiveness
          maxWidth: "300px", // Limit the maximum width
          height: "auto",
          borderRadius: "8px",
          margin: "0 auto", // Center image on mobile and laptop
          flex: 1, // Let image take equal space
        }}
      />
    </Box>
  );
};

// Main App Component
const App = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Automatically change banners every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length); // Cycle through banners
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ padding: "0", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Render the current banner */}
      <Banner
        image={bannerData[currentBanner].image}
        title={bannerData[currentBanner].title}
        subtitle={bannerData[currentBanner].subtitle}
      />
    </Box>
  );
};

export default App;
