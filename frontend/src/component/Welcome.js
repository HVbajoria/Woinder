import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./logo.jpg";
const useStyles = makeStyles({
  custom: {
    color: "#166898",
    fontStyle: "italic"
  }
});

const Welcome = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "70px", minHeight: "93vh" }}
    >
      <Grid item>
        <img src={Logo} align="center" height={300} width={300}/>
        <Typography variant="h2">Welcome to Woinder</Typography>
        <Typography variant="h5" align="center" className={classes.custom}>Do What You Love</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
        <Typography variant="h5" align="center" className={classes.custom}> Try Again Later</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
