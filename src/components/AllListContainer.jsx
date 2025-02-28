import {
  Backdrop,
  Box,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAllList from "../api/useAllList";
import { sortPlacesByDistance } from "../loc";
import StoreCard from "./StoreCard";

const AllListContainer = () => {
  const { places, loading, error } = useAllList();
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });
  const [sortedPlaces, setSortedPlaces] = useState([]);

  // 현재 위치랑 정렬을 한번에 합칠 수 있음
  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lon: longitude });
            const sorted = sortPlacesByDistance(
              places,
              userLocation.lat,
              userLocation.lon
            );
            setSortedPlaces(sorted);
          },
          (error) => {
            console.error("위치를 불러오지 못했습니다. ", error);
          }
        );
      } else {
        setSortedPlaces(places);
      }
    };

    getCurrentPosition();
  }, [places]);

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
      <Typography variant="body1" sx={{ pb: 3 }}>
        📍 현재 위치 기준 가까운순으로 보여집니다
      </Typography>

      <Grid2 container spacing={2}>
        {sortedPlaces.map((item, id) => (
          <Grid2 key={id} size={{ xs: 6, sm: 4, md: 3 }}>
            <StoreCard item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default AllListContainer;
