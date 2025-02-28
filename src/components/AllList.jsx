import { Backdrop, Box, CircularProgress, Grid2, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import useAllList from "../api/useAllList";

const AllList = () => {
  const { places, loading } = useAllList();

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
        {places.map((item, id) => (
          <Grid2 key={id} size={3}>
            <Item>{item.title}</Item>
          </Grid2>
        ))}
      </Grid2>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default AllList;
