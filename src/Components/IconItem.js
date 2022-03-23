import * as React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
function IconItem(props) {
  return (
      <List>
        {props.data.map((item) => (
          <ListItem >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
  );
}
export default IconItem;
