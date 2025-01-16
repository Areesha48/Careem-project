import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", py: 4, mt: 8 }}>
      {/* Main Grid for Sections */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} justifyContent="space-around">
        {/* Logo and App Links */}
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <img src="/careeemlogo.avif" alt="Careem Logo" style={{ height: "30px" }} />
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src="/app-store.webp"
              alt="App Store"
              style={{ height: "50px", marginBottom: "8px", cursor: "pointer" }}
            />
            <img
              src="/google-play.webp"
              alt="Google Play"
              style={{ height: "50px", marginBottom: "8px", cursor: "pointer" }}
            />
            <img
              src="/apk-download.webp"
              alt="Android Direct Download"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
            Services
          </Typography>
          {["Go", "Eat", "Get", "Pay", "Careem Plus"].map((service) => (
            <Typography
              variant="body2"
              key={service}
              sx={{ mb: 0.5, textAlign: "center" }}
            >
              {service}
            </Typography>
          ))}
        </Grid>

        {/* Partners Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
            Partners
          </Typography>
          {[
            "Corporate packages",
            "Restaurant delivery",
            "B2B delivery",
            "Pay merchant solutions",
            "Become a supplier",
          ].map((partner) => (
            <Typography
              variant="body2"
              key={partner}
              sx={{ mb: 0.5, textAlign: "center" }}
            >
              {partner}
            </Typography>
          ))}
        </Grid>

        {/* Join Our Team */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
            Join our team
          </Typography>
          {[
            "About us",
            "Engineering at Careem",
            "Careers",
            "Explore open roles",
            "Why Careem",
          ].map((team) => (
            <Typography
              variant="body2"
              key={team}
              sx={{ mb: 0.5, textAlign: "center" }}
            >
              {team}
            </Typography>
          ))}
        </Grid>

        {/* About Us */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
            About us
          </Typography>
          {["Our social impact", "Information security", "Blog"].map((about) => (
            <Typography
              variant="body2"
              key={about}
              sx={{ mb: 0.5, textAlign: "center" }}
            >
              {about}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        mt={4}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Location and Language */}
        <Box display="flex" gap={2} justifyContent="center" mb={{ xs: 2, md: 0 }}>
          <Typography variant="body2">
            <LocationOnIcon fontSize="small" /> U.A.E.
          </Typography>
          <Typography variant="body2">
            <LanguageIcon fontSize="small" /> English
          </Typography>
        </Box>

        {/* Links */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mb={{ xs: 2, md: 0 }}>
          <Link href="#" underline="none" sx={{ mr: 2 }}>
            Help Centre
          </Link>
          <Link href="#" underline="none">
            Book your ride
          </Link>
        </Box>

        {/* Social Icons */}
        <Box display="flex" gap={1} justifyContent="center">
 <style backgroundColor='black'></style>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Bottom Line */}
      <Box mt={2} textAlign="center">
        <Typography variant="body2">© 2024 Careem. All rights reserved.</Typography>
        <Typography variant="body2">
          <Link href="#">Terms of Service</Link> | <Link href="#">Privacy Notices</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
