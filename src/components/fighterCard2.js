import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    maxHeight: 200,
    marginRight: "auto",
    marginTop: 40,
    float: "right", 
    
  },

});

export default function MediaCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"
          style={{textAlign: "center", marginBottom: 30}}>
            Fighter 2
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{textAlign: "center"}}>
        <Button size="small" color="primary">
          Attack 1
        </Button>
        <Button size="small" color="primary">
          Attack 2
        </Button>
      </CardActions>
    </Card>
  );
}