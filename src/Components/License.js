import * as React from "react";
import { List, Grid, Typography, ListItemText } from "@mui/material";
function License(props) {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" component="span">
        {props.label}
      </Typography>
      <Typography
        variant="subtitle2"
        component="span"
        color="gray"
        sx={{ p: 1 }}
      >
        {props.time}
      </Typography>
    </Grid>
  );
}
export default License;
