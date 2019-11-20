import React from "react";
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
  }
}));

const actions = [
  { icon: <SportsEsportsIcon />, name: "Quick Play" },
  { icon: <ContactsIcon />, name: "AboutUs" },
  { icon: <HelpIcon />, name: "Instructions" },
  { icon: <AssignmentIndIcon />, name: "SignIn" },
  { icon: <AddIcon />, name: "SignUp" },
  { icon: <ExitToAppIcon />, name: "SignOut" }
];

export default function PopAction(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleVisibility}>Toggle Menu</Button>
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
            tooltipOpen
            onClick={() => {
              if (action.name === "SignOut") {
                app.auth().signOut();
                props.handleComponentChange("SignIn");
                handleClose();
              } else {
                props.handleComponentChange(action.name);
                handleClose();
              }
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
