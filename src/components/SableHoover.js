import React from "react";
import { Slide } from "material-auto-rotating-carousel";

export default function SableHoover() {
  const { red } = require("@material-ui/core/colors");
  const { withStyles } = require("@material-ui/core/styles");

  const styles = {
    root: {
      backgroundColor: red[600],
    },
    media: {
      backgroundColor: red[400]
    }
  };

  const StyledSlide = withStyles(styles)(Slide);

  return (
    <StyledSlide
      media={
        <img
          src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"
          alt=""
        />
      }
      title="This is a very cool feature"
      subtitle="Just using this will blow your mind."
    />
  );
}
