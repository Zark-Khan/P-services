"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
} from "@mui/material";

function HomeCompo() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page?populate[list_values][populate]=image_list`;
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.data);
        setSelectedItem(result.data?.list_values?.[0] || null); // Set first item by default
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Could not load content");
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  const listValues = data?.list_values || [];

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10, background: "#ffffff" }}>
      <Box>
        <Typography sx={{ textAlign: "center", color: "black" }} variant="h6" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography sx={{ textAlign: "center", color: "black" }} variant="h4" gutterBottom>
          We Are Different From Others
        </Typography>
        <Typography sx={{ textAlign: "center", color: "black" }} variant="body2" gutterBottom>
          {data?.sub_description}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Image Section */}
        <Grid item xs={12} md={8}>
          <Box
            position={{ md: "relative" }}
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            height="370px"
            marginBottom={4}
            marginTop={6}
            display={{ xs: "flex", sm: "flex" }}
            flexWrap={{ xs: "wrap", sm: "wrap" }}
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
                opacity: 0.7,
                zIndex: 2,
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "45%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "white",
                  zIndex: 3,
                }}
              >
                {selectedItem?.title}
                <span style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "white",
                  marginTop: "8px",
                }}>
                  {selectedItem?.description}
                </span>
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: { xs: "block", sm: "block", md: "none" },
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "black",
                  textAlign: "center",
                }}
              >
                {selectedItem?.title}
                <br />
                {selectedItem?.description}
              </Typography>
            </Box>

            <Box
              sx={{
                position: { md: "absolute" },
                top: "0%",
                left: "75%",
                width: "100%",
                height: { xs: "300px", sm: "300px", md: "100%" },
                backgroundImage: `url('${selectedItem?.image_list?.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: { xs: "0%", sm: "0%", md: "50%" },
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>

        {/* Text List Section */}
        <Grid item xs={12} md={4} sx={{ marginTop: { xs: "10px", sm: "10px", md: "90px" } }}>
          <List sx={{ width: "100%" }}>
            {!!listValues.length &&
              listValues.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    width: "100%",
                    backgroundColor: selectedItem?.title === item.title ? "#ac2541" : "#dfe4ed",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                    marginBottom: 2,
                    padding: 2,
                    color: "black",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => handleListItemClick(item)}
                >
                  <div style={{ color: selectedItem?.title === item.title ? "#dfe4ed" : "black", minWidth: "40px", fontWeight: "bold" }}>
                    <p>{"<"}</p>
                  </div>
                  <div
                    style={{
                      color: selectedItem?.title === item.title ? "#dfe4ed" : "black",
                      marginLeft: "8px",
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
