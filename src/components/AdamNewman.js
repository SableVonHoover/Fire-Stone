import React from "react";
import { Slide } from "material-auto-rotating-carousel";

export default function AdamNewman() {
  const { blue } = require("@material-ui/core/colors");
  const { withStyles } = require("@material-ui/core/styles");

  const styles = {
    root: {
      backgroundColor: blue[600],
    },
    media: {
      backgroundColor: blue[600]
    }
  };

  const StyledSlide = withStyles(styles)(Slide);

  return (
    <StyledSlide
      media={
        <img
          style={{width: "100%", height: "100%"}}
          src="https://ca.slack-edge.com/TJP3TP97Y-UJFGWAT6X-dde9d7adda5e-512"
          alt=""
        />
      }
      title="This is Adam Newman"
      subtitle="Our main Front End Developer and Feature Designer."
    />
  );
}
