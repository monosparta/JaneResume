import * as React from "react";

import { Grid, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function WorkStepper(props) {
  return (
    <Grid container spacing={2}>
    <Grid >
      <Timeline position="alternate">
        {props.steps.map((work) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span" >
                {work.label}
              </Typography>
              <Typography variant="subtitle2" component="span" color="gray" sx={{p:1}}>
                {work.time}
              </Typography>
              <Typography> {work.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      </Grid>
    </Grid>
  );
}
export default WorkStepper;
