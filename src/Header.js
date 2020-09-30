import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SidePanelBox from "./SidePanel/SidePanelBox";
import Description from "./Description";
import ExpertsPanel from "./ExpertsPanel";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  section: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow: "scroll",
    marginTop: "60px",
  },
}));

const Header = ({ courseDetails }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <strong>{courseDetails.name}</strong>
            </Paper>
            <div className="video-file">
              <video
                key={courseDetails.introVideo}
                width="100%"
                height="400"
                controls
              >
                <source src={courseDetails.introVideo} />
                Your browser does not support the video tag.
              </video>
            </div>
            <Description description={courseDetails.description} />
            <ExpertsPanel />
          </Grid>

          <Grid item xs={5}>
            <Paper className={classes.section} style={{ height: "400px" }}>
              <SidePanelBox modules={courseDetails.modules} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Header;
