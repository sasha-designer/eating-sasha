import {
  Backdrop,
  Box,
  Button,
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
          <Grid2 key={id} size={{ xs: 6, sm: 4, md: 3 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                // image={item.image.src}
                image={`http://localhost:3000/${item.image.src}`}
                title={item.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    sx={{ textAlign: "left" }}
                  >
                    {item.title}
                  </Typography>
                  <Button></Button>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  {item.description}
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

export default AllList;
