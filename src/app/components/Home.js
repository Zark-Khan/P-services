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

  const listValues = data.list_values
  ? data.list_values
      .trim() // Remove leading/trailing whitespace
      .split("\n") // Split into an array by newline
      .filter((val) => val.trim() !== "") // Remove empty lines
      .map((value) => value.replace(/^-\s*/, "").trim()) // Remove leading "-" and trim
  : [];

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
         {data?.sub_description}
        </Typography>
      </Box>
      <Grid container spacing={4}  sx={{display:"flex", justifyContent:"space-between"}}>
        {/* Left Side: Image Section */}
        <Grid item xs={12} md={8}>
          <Box
            position={{md:"relative"}}
            width={{xs:"100%", sm:"100%", md:"50%"}}
            height="370px"
            marginBottom={4}
            marginTop={6}
            display={{xs:"flex", sm:"flex"}}
            flexWrap={{xs:"wrap", sm:"wrap"}}
          >
            {/* Background Circle */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#ac2541",
                borderRadius: "50%",
                opacity: 0.7, // Make it semi-transparent
                zIndex: 2,
                display:{xs:"none", sm:"none", md:"block"}
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
                  zIndex: 3,
                  
                }}
              >
                {data?.image_text}
              </Typography>
            </Box>
            <Box
            sx={{
              width:"100%",
              display:{xs:"block", sm:"block", md:"none"},
            }}
            >
            <Typography
                sx={{
                  width:"100%",
                  // transform: "translate(-50%, -50%)", // Centers the text
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "black", 
                  textAlign:"center"
                }}
                
              >
                {data?.image_text}
              </Typography>
              </Box>
            {/* Image Circle (Edges Crossing) */}
            
            
            <Box
              sx={{
                position: {md:"absolute"},
                top: "0%",
                left: "75%", // Slightly offset to overlap the background circle
                width: "100%", 
                height: {xs:"300px", sm:"300px", md:"100%"},
                backgroundImage: `url('https://st.depositphotos.com/1049680/2265/i/950/depositphotos_22652109-stock-photo-young-woman-using-laptop.jpg')`, // Replace with your image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: {xs:"0%", sm:"0%",md:"50%"},
                zIndex: 1,
              }}
            />
          </Box>
          
        </Grid>

        {/* Right Side: Text Section */}
        <Grid item xs={12} md={4} sx={{ marginTop: {xs:"10px", sm:"10px", md:"90px"} }}>
          <List sx={{ width: "100%" }}>
            {!!listValues.length &&
              listValues.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: "100%",
                    backgroundColor: index === 0 ? "#ac2541" : "#dfe4ed", // Red background color
                    borderTopLeftRadius: "8px", // Border radius for the left side
                    borderBottomLeftRadius: "8px", // Border radius for the left side
                    marginBottom: 2, // Space between items
                    padding: 2,
                    color: "black", // White text for better contrast
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{  color: index === 0 ? "#dfe4ed" : "black", minWidth: "40px", fontWeight:"bold" }}>
                    <p>{"<"}</p>
                  </div>
                  <div
                    // primary={feature.text}
                    style={{
                      color: index === 0 ? "#dfe4ed" : "black",
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
