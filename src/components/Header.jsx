import { Icon } from "@iconify/react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "black" }} elevation={0} position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mb: 1 }}
            >
              <Icon icon="fluent-emoji-flat:hamburger" width="48" height="48" />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              오늘 뭐 먹냥 🐱
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
