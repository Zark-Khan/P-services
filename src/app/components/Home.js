"use client";
import React, { useState } from "react";
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

  const listValues = data?.list_values || [];
  
  const [selectedItem, setSelectedItem] = useState(listValues[0] || {});  

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };
  
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
                  top: "45%",
                  left: "40%",
                  transform: "translate(-50%, -50%)", // Centers the text
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "white", // Text color (adjust as needed)
                  zIndex: 3,
                  
                }}
              >
                {selectedItem?.title}
                <span style={{
                display: "block", // Makes the span a block element (on a new line)
                fontSize: "14px", // Smaller font size for the description
                fontWeight: "normal", // No bold styling
                color: "white", // Optional: keep text color consistent with title
                marginTop: "8px",
              }}>
                {selectedItem?.description}
                </span>
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
                {selectedItem?.title}
                <br />
                {selectedItem?.description}
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
                backgroundImage: `url('${selectedItem?.image_list?.url}')`,
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
              listValues.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: "100%",
                    backgroundColor: selectedItem?.title === item.title ? "#ac2541" : "#dfe4ed",
                    borderTopLeftRadius: "8px", // Border radius for the left side
                    borderBottomLeftRadius: "8px", // Border radius for the left side
                    marginBottom: 2, // Space between items
                    padding: 2,
                    color: "black", // White text for better contrast
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => handleListItemClick(item)}
                >
                  <div style={{  color:  selectedItem?.title === item.title ? "#dfe4ed" : "black", minWidth: "40px", fontWeight:"bold" }}>
                    <p>{"<"}</p>
                  </div>
                  <div
                    // primary={feature.text}
                    style={{
                      color:  selectedItem?.title === item.title ? "#dfe4ed" : "black",
                      ml: 2, // Space between icon and text
                    }}
                  >
                     {item.title}
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
