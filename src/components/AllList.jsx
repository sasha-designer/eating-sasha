import { Box, Grid2, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const AllList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box>
      <h1>맛집 목록</h1>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>b</Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>c</Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>d</Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>a </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AllList;
