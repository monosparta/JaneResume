import * as React from "react";

import { Typography, Grid } from "@mui/material";

function LanguageListItem(props) {
  return (
    <Grid container spacing={4} sx={{pl:3}} justifyContent="flex-start" justifyItems="flex-start" alignItems="center">
      <Grid item >
        <Typography variant="h6">{props.type}</Typography>
      </Grid>
      <Grid item >
      <Typography variant="subtitle2">{props.level}</Typography>

      </Grid>
    </Grid>
  );
}
export default LanguageListItem;
