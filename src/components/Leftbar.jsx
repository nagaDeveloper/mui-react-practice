import { Home } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    position: "sticky",
    top: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
