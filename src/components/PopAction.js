import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import MenuIcon from "@material-ui/icons/Menu";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ContactsIcon from "@material-ui/icons/Contacts";
import HelpIcon from "@material-ui/icons/Help";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import app from "../js/firebaseConfig";
import { width } from "window-size";
import { AuthContext } from "../js/auth.js";

// import ViewContainer from "./ViewContainer";

const useStyles = makeStyles(theme => ({
  root: {
    height: 0,
    transform: "translateZ(0px)",
    flexGrow: 1
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  },
  tooltip: {
    fontSize: 30
    // width: 10
  }
}));

let actions;

export default function PopAction(props) {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  if (currentUser) {
    actions = [
      { icon: <SportsEsportsIcon />, name: "Quick Play" },
      { icon: <ContactsIcon />, name: "About Us" },
      { icon: <HelpIcon />, name: "Instructions" },
      { icon: <ExitToAppIcon />, name: "Sign Out" }
    ];
  } else if (!currentUser) {
    actions = [
      { icon: <ContactsIcon />, name: "About Us" },
      { icon: <HelpIcon />, name: "Instructions" },
      { icon: <AssignmentIndIcon />, name: "Sign In" },
      { icon: <AddIcon />, name: "Sign Up" }
    ];
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleVisibility}
        elevation={11}
        style={{ zIndex: "1000", top: "75vh" }}
      >
        Toggle Menu
      </Button>
      <Backdrop open={open} />

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        direction="up"
        hidden={hidden}
        icon={<SpeedDialIcon icon={<TouchAppIcon />} openIcon={<MenuIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // tooltipOpen
            onClick={() => {
              if (action.name === "Sign Out") {
                app.auth().signOut();
                props.handleComponentChange("Sign In");
                handleClose();
              } else {
                props.handleComponentChange(action.name);
                handleClose();
              }
            }}
            TooltipClasses={classes}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
