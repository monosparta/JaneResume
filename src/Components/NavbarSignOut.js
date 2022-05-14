import * as React from "react";
import {Box,IconButton,Avatar,Tooltip} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AccountMenu() {
  let history = useNavigate();

  const handleClick = () => {
    history("/signin");
  };
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
export default AccountMenu;
