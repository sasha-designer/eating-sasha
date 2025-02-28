import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import useMyList from "../api/useMyList";

const MyList = () => {
  const { places, loading } = useMyList();

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
      <h1>찜한 맛집</h1>
      <Grid2 container spacing={2}>
        {places.map((item, id) => (
          <Grid2 key={id} size={{ xs: 6, sm: 4, md: 3 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                // image={item.image.src}
                image={`http://localhost:3000/${item.image.src}`}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default MyList;
