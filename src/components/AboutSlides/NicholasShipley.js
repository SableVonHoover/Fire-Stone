import React from "react";
import { Slide } from "material-auto-rotating-carousel";

export default function NicholasShipley() {
  const { green } = require("@material-ui/core/colors");
  const { withStyles } = require("@material-ui/core/styles");

  const styles = {
    root: {
      backgroundColor: green[900]
    },
    media: {
      backgroundColor: green[900]
    }
  };

  const StyledSlide = withStyles(styles)(Slide);

  return (
    <StyledSlide
      media={
        <img
          src="https://ca.slack-edge.com/TJP3TP97Y-UJY49QQHM-64f340515c7c-512"
          alt=""
        />
      }
      title="This is Nicholas Shipley"
      subtitle="Our Backend Developer and Game Mechanics Engineer."
    />
  );
}
