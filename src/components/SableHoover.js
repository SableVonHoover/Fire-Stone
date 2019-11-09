import React from "react";
import { Slide } from "material-auto-rotating-carousel";
import { pink } from "@material-ui/core/colors";

export default function SableHoover() {
  const { amber } = require("@material-ui/core/colors/");
  const { withStyles } = require("@material-ui/core/styles");

  const styles = {
    root: {
      backgroundColor: pink[100]
    },
    media: {
      backgroundColor: pink[100]
    }
  };

  const StyledSlide = withStyles(styles)(Slide);

  return (
    <StyledSlide
      media={
        <img
          src="https://ca.slack-edge.com/TJP3TP97Y-UJVSLLAAG-d390a301b876-512"
          alt=""
        />
      }
      title="This is Sable Hoover"
      subtitle="Our Backend Developer, Authentication and Database Engineer."
    />
  );
}
