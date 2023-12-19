import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h2>VERSE OF THE DAY</h2>
        </Typography>
        <Typography variant="h5" component="h2">
          The Lord is my shephered; <br /> I shall not want
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Psalms 23:1
        </Typography>
        <a href="https://www.vachanonline.com">vachanonline.com</a>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{ marginLeft: 40, marginRight: 40 }}
        >
          Read
        </Button>
      </CardActions>
    </Card>
  );
}
