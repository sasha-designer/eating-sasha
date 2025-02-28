import {
  Backdrop,
  Box,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import useAllList from "../api/useAllList";
import StoreCard from "./StoreCard";

const AllListContainer = () => {
  const { places, loading, error } = useAllList();

  if (loading) {
    return (
      <Backdrop open={loading}>
        <Typography variant="h6"> 맛집을 불러오는 중입니다...</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 8, border: 1, borderColor: "error.main", mt: 10 }}>
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ pb: 3 }}>
        맛집 목록
      </Typography>

      <Grid2 container spacing={2}>
        {places.map((item, id) => (
          <Grid2 key={id} size={{ xs: 6, sm: 4, md: 3 }}>
            <StoreCard item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default AllListContainer;
