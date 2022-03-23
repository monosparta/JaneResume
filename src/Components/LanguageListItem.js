import * as React from "react";

import { Typography, Grid } from "@mui/material";

function LanguageListItem(props) {
  return (
    <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
      <Grid item xs={5} >
        <Typography variant="h6">{props.type}</Typography>
      </Grid>
      <Grid item xs={3}>
      <Typography variant="subtitle1">{props.level}</Typography>

      </Grid>
    </Grid>
  );
}
export default LanguageListItem;
