import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import useMyList from "../api/useMyList";

const MyListContainer = () => {
  const { places } = useMyList();

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#f7f7f7",
        pb: 7,
      }}
    >
      <Typography variant="h4" sx={{ pb: 3 }}>
        찜한 맛집
      </Typography>

      {places === null ? (
        <Grid2 container spacing={2}>
          {places.map((item, id) => (
            <Grid2 key={id} size={{ xs: 6, sm: 4, md: 3 }}>
              <StoreCard item={item} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", marginTop: 2, color: "gray" }}
        >
          앗, 아직 찜한 맛집이 없어요 😢 <br />
          하트를 눌러 나만의 맛집 리스트를 만들어보세요! ❤️
        </Typography>
      )}
    </Box>
  );
};

export default MyListContainer;
