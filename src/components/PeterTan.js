import React from "react";
import { Slide } from "material-auto-rotating-carousel";

export default function PeterTan() {
  const { grey } = require("@material-ui/core/colors");
  const { withStyles } = require("@material-ui/core/styles");

  const styles = {
    root: {
      backgroundColor: grey[900]
    },
    media: {
      backgroundColor: grey[900]
    }
  };

  const StyledSlide = withStyles(styles)(Slide);

  return (
    <StyledSlide
      media={
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://ca.slack-edge.com/TJP3TP97Y-UJBLLF259-9b02def75c37-512"
          alt=""
        />
      }
      title="This is Peter Tan"
      subtitle="Our Frontend Developer/Designer, Frontend/Backend Integration Specialist."
    />
  );
}
