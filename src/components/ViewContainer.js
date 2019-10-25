import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import App from './App'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ViewContainer() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <App />
      </Paper>
    </div>
  );
}
