import { AddAPhoto } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Fab,
  Fade,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  modal: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
}));

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Add;
