"use client";
import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function HomeCompo({ data }) {
  console.log(data);

  const firstValues = data.map((item) => {
    const listValues = item.list_values
      ? item.list_values
          .trim()
          .split("\n")
          .filter((val) => val.trim() !== "")
      : [];
    return listValues[0]; // Return the first value
  });
  const firstValuesCleaned = firstValues.map((value) =>
    value?.replace(/^-\s*/, "").trim()
  );
  return (
    <Container maxWidth="lg" sx={{ py: 10 , background:"#ffffff"}}>
      <Box>
        <Typography sx={{ textAlign: "center", color:"black" }} variant="h6" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography sx={{ textAlign: "center", color:"black" }} variant="h4" gutterBottom>
          We Are Different From Others
        </Typography>
        <Typography sx={{ textAlign: "center", color:"black" }} variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque
          architecto, facere eveniet corporis praesentium rem fugiat quam itaque
          rerum repellat consectetur earum a nemo exercitationem, quisquam odit
          consequatur maxime.
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            position="relative"
            width="50%"
            height="280px"
            marginBottom={4}
            marginTop={6}
          >
            {/* Background Circle */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "red",
                borderRadius: "50%",
                opacity: "0.1",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Centers the text
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "white", // Text color (adjust as needed)
                }}
              >
                Your Text Here
              </Typography>
            </Box>
            {/* Image Circle (Edges Crossing) */}
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                left: "85%", // Slightly offset to overlap the background circle
                width: "100%", // Smaller size to create overlap
                height: "100%",
                backgroundImage: `url('https://st.depositphotos.com/1049680/2265/i/950/depositphotos_22652109-stock-photo-young-woman-using-laptop.jpg')`, // Replace with your image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>

        {/* Right Side: Text Section */}
        <Grid item xs={12} md={6} sx={{ marginTop: "90px" }}>
          <List sx={{ width: "100%" }}>
            {!!firstValuesCleaned.length &&
              firstValuesCleaned.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: "100%",
                    backgroundColor: index === 0 ? "red" : "lightgray", // Red background color
                    borderTopLeftRadius: "8px", // Border radius for the left side
                    borderBottomLeftRadius: "8px", // Border radius for the left side
                    marginBottom: 2, // Space between items
                    padding: 2,
                    color: "white", // White text for better contrast
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ color: "white", minWidth: "40px" }}>
                    <p>{"<"}</p>
                  </div>
                  <div
                    // primary={feature.text}
                    style={{
                      color: "white",
                      ml: 2, // Space between icon and text
                    }}
                  >
                    {feature}
                  </div>
                </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeCompo;
