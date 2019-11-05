import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import PeterTan from "./PeterTan";
import AdamNewman from "./AdamNewman";
import NicholasShipley from "./NicholasShipley";
import SableHoover from "./SableHoover";
import Button from "@material-ui/core/Button";
import { black } from "ansi-colors";

export default function AboutApp(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs" align="center" justify="center">
        <CssBaseline />
        <Button onClick={handleOpen} className="paper">
          <Paper
            style={{
              height: 450,
              width: 750,
              backgroundColor: black
            }}
            className="paper"
          >
            Open carousel
          </Paper>
        </Button>
        <AutoRotatingCarousel
          label="Close"
          open={open}
          onClose={handleClose}
          onStart={handleClose}
        >
          <PeterTan />
          <AdamNewman />
          <NicholasShipley />
          <SableHoover />
        </AutoRotatingCarousel>
      </Container>
    </div>
  );
}
