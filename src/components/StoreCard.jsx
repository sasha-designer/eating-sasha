import { Icon } from "@iconify/react";
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useMyList from "../api/useMyList";

const StoreCard = ({ item }) => {
  const { addPlace } = useMyList();
  const { image, title, description } = item;
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    addPlace(item);
    console.log("save", item);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, position: "relative" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`http://localhost:3000/${image.src}`}
          title={title}
        />
        <ButtonBase
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 999,
            padding: "8px",
            textAlign: "right",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "50%",
          }}
          onClick={handleSave}
        >
          <Icon
            icon={saved ? "eva:heart-fill" : "eva:heart-outline"}
            width="24"
            height="24"
            color={saved ? "red" : "black"}
          />
        </ButtonBase>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoreCard;
