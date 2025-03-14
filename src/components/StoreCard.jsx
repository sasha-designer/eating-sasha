import { Icon } from "@iconify/react";
import {
  Button,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import useAddMyPlace from "../api/useAddMyPlace";
import useDeleteMyPlace from "../api/useDeleteMyPlace";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/reducers";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const StoreCard = ({ item }) => {
  const { image, title, description } = item;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const { addMyPlace } = useAddMyPlace();
  const { deletePlace } = useDeleteMyPlace();
  const [saved, setSaved] = useState(favorites.some((fav) => fav === item.id));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSaved(favorites.some((fav) => fav === item.id));
  }, [favorites]);

  console.log("favorites", favorites);

  const handleSave = () => {
    if (saved) {
      handleClickOpen();
      // if (
      //   window.confirm(
      //     "Are you sure you want to remove this item from your favorites?"
      //   )
      // ) {
      //   dispatch(removeFavorite(item.id));
      //   // console.log("removeFavorite", item.id);

      //   deletePlace(item.id);
      //   // console.log("useDeleteMyPlace", item.id);
      //   setSaved(!saved);
      // }
    } else {
      dispatch(addFavorite(item.id));
      addMyPlace(item);
      // setSaved(!saved);
    }
  };

  const handleDelete = () => {
    dispatch(removeFavorite(item.id));
    deletePlace(item.id);
    // setSaved(!saved);
    setOpen(false);
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"확인"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              찜한 맛집에서 정말 삭제할까요?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>더 생각해보기</Button>
            <Button variant="outlined" onClick={handleDelete} autoFocus>
              삭제하기
            </Button>
          </DialogActions>
        </Dialog>

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
