import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
//import ApiDataController from "../ApiDataController";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "20.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const SidePanelBox = (props) => {
  console.log(props);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel, id) => (event, isExpanded) => {
    // if (isExpanded) {
    //   props.getModuleDetailsById(id);
    // }
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {props.modules
        ? props.modules.map((module) => {
            return (
              <ExpansionPanel
                expanded={expanded === "panel" + module.id}
                onChange={handleChange(
                  "panel" + module.id,
                  module.moduleExperts[0].moduleId
                )}
                style={{ margin: "5px" }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    <Avatar
                      alt={module.moduleExperts[0].expertName}
                      src={module.moduleExperts[0].profilePic}
                      height="65"
                      width="65"
                    />
                  </Typography>

                  <Typography className={classes.secondaryHeading}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {module.title}
                    </span>{" "}
                    <span style={{ color: "blue", fontWeight: "bold" }}>
                      {module.name}
                    </span>{" "}
                    {"  "}
                    <AccessTimeIcon /> {module.durationStr}
                    
                  </Typography>
                </ExpansionPanelSummary>
                {module.moduleExperts
                  ? module.moduleExperts.map((expert) => {
                      return (
                        <ExpansionPanelDetails
                          style={{ padding: "8px 55px 16px" }}
                        >
                          <Typography className={classes.heading}>
                            <Avatar
                              alt={expert.expertName}
                              src={expert.profilePic}
                              height="65"
                              width="65"
                            />
                          </Typography>
                          <Typography className={classes.secondaryHeading}>
                            <span style={{ color: "red", fontWeight: "bold" }}>
                              Chapter {expert.chapterId}
                            </span>{" "}
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                              {module.name}
                            </span>
                          </Typography>
                        </ExpansionPanelDetails>
                      );
                    })
                  : ""}
              </ExpansionPanel>
            );
          })
        : ""}
    </div>
  );
};

export default SidePanelBox;
