import * as React from "react";

import { Grid, Typography, List, ListItem, ListItemText } from "@mui/material";

function SkillListItem(props) {
  return (
    <Grid item xs={12} md={3} sm={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        {props.title}
      </Typography>
      <List>
        {props.data.map((value) => (
            <ListItemText primary={value} />
        ))}
      </List>
    </Grid>
  );
}
export default SkillListItem;
