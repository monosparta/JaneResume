import * as React from "react";
import {Box,IconButton,Avatar,Tooltip} from "@mui/material";

function MessageBoard() {
  return (
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center",flexDirection: 'row-reverse' }}>
        <Tooltip title="登入">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      
  );
}
export default MessageBoard;
