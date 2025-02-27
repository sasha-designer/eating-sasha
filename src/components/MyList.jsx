import { Box, Grid2, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const MyList = () => {
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
        <Grid2 size={3}>
          <Item>
            <img src="image1.jpg" alt="a" style={{ width: "100%" }} />
            <p style={{ margin: 0, fontSize: "0.8rem" }}>a</p>
          </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>
            <img src="image2.jpg" alt="b" style={{ width: "100%" }} />
            <p style={{ margin: 0, fontSize: "0.8rem" }}>b</p>
          </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>
            <img src="image3.jpg" alt="c" style={{ width: "100%" }} />
            <p style={{ margin: 0, fontSize: "0.8rem" }}>c</p>
          </Item>
        </Grid2>
        <Grid2 size={3}>
          <Item>
            <img src="image4.jpg" alt="d" style={{ width: "100%" }} />
            <p style={{ margin: 0, fontSize: "0.8rem" }}>d</p>
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MyList;
