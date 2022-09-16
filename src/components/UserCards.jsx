import React, { useState, useEffect } from "react";
import { styled, Grid, Paper, Box, Badge } from "@mui/material";
import { usersData, productsData } from "../dashboard";

export default function UserCards() {
  const [usersDataArr, setUsersData] = useState([]);
  const [productsDataArr, setProductsData] = useState([]);

  useEffect(() => {
    usersData.then((e) => setUsersData(e));
    productsData.then((e) => setProductsData(e));
  }, []);

  const numOfProducts = (id) =>
    productsDataArr.filter((product) => product.userId === id).length;

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={{ xs: 3 }} columnSpacing={{ xs: 3 }}>
        {usersDataArr.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4}>
            <Item>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <Badge
                badgeContent={numOfProducts(user.id)}
                color="primary"
                style={{ position: "absolute", right: 30, top: 0 }}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
  height: 100,
}));
