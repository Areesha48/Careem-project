import React from "react";
import { Card, CardContent, Typography, Grid, Box, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const categories = [
  {
    title: "Go",
    subtitle: "anywhere",
    color: "#1E3AA5",
    items: ["Rides", "Taxi", "Bike", "CarRental", "SchoolRides"],
  },
  {
    title: "Eat",
    subtitle: "anytime",
    color: "#A7F5CE",
    items: ["Food", "DineOut"],
  },
  {
    title: "Get",
    subtitle: "anything",
    color: "#A97AF9",
    items: [
      "Groceries",
      "Quik Electronics",
      "Supermarkets",
      "Delivery",
      "HomeCleaning",
      "Salon&Spa",
      "Laundry",
      "Flowers",
      "Pharmacy",
    ],
  },
  {
    title: "Pay",
    subtitle: "anyone",
    color: "#020E43",
    items: ["Pay", "Donations", "Send money"],
  },
];

const CardsSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: category.color,
                color: "#fff",
                borderRadius: "12px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                  {category.title}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {category.subtitle}
                </Typography>
                <Box>
                  {category.items.map((item, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        mb: 0.5,
                      }}
                    >
                      <span>😊</span> {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <IconButton
                sx={{
                  color: "#fff",
                  alignSelf: "flex-end",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                  mr: 1,
                  mb: 1,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsSection;
