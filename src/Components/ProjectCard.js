import * as React from "react";

import { Typography, Grid } from "@mui/material";

function ProjectCard(props) {
  return (
    <Grid container spacing={4} sx={{pl:3}} justifyContent="flex-start" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">{props.label}</Typography>
        {props.description}
      </Grid>

      <Grid item xs={12} sm={6}>
        <img
          alt="Jane"
          src={props.image}
          variant="square"
          sx={{ width: 144, height: 144 }}
        />
      </Grid>
    </Grid>
  );
}
export default ProjectCard;
