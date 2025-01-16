import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from "@mui/material";

const BlogSection = () => {
  const blogData = [
    {
      title: "Stanford MBA students visit Careem",
      description:
        "The aim was to help them learn more about Careem’s growth and adaptability to regional needs and requirements, along with the entrepreneurial environment in the region.",
      image: "/blogsection1.avif", // Replace with actual image URL
      link: "#",
    },
    {
      title: "3 ways our software engineers use AI in their daily work",
      description:
        "It’s no secret that the topic of AI has taken over the digital space over the past few months, especially after the launch of ChatGPT.",
      image: "/blogsection2.avif", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Careem: Chapter 3",
      description:
        "Nearly 11 years ago, we started Careem with a desire to build something big and meaningful. On the one hand, the success of Careem and its impact on our ecosystem has exceeded our wildest imaginations.",
      image: "/blogsection3.avif", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <Container
      style={{
        padding: "30px 0",
        background: "#00d29f",
        borderRadius: "10px",
        marginTop: "5rem",
      }}
    >
      {/* Section Header */}
      <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: "20px" }}>
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "1.2rem",
          }}
        >
          Our Blog
        </Typography>
        <Button
          variant="text"
          href="#"
          style={{
            textTransform: "none",
            color: "#00EB79",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          View all →
        </Button>
      </Grid>

      {/* Blog Cards */}
      <Grid container spacing={2}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "10px", // Reduce padding to make it compact
              }}
            >
              <CardMedia
                component="img"
                height="150" // Smaller height for images
                image={blog.image}
                alt={blog.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent style={{ flexGrow: 1, backgroundColor: "#f9f9f9" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "0.95rem", // Reduce font size
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ fontSize: "0.85rem" }}
                >
                  {blog.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                href={blog.link}
                style={{
                  margin: "10px",
                  fontSize: "0.8rem", // Smaller button size
                  color: "#2D2E2E",
                  backgroundColor: "#00EB79",
                  textTransform: "none",
                  alignSelf: "center",
                  boxShadow: "none",
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    boxShadow: "none",
                  },
                }}
              >
                Read more
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;
