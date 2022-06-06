import * as React from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import axios from "../Axios.config";
import { useNavigate } from "react-router-dom";

function AccountMenu() {
  let history = useNavigate();
  const userName = localStorage.getItem("name");
  const handleLogout = () => {
    axios
      .get("api/auth/signout")
      .then((response) => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        localStorage.clear();
        window.location.reload();
        console.log(error.response.data["detail"]);
      });
  };
  const stringToColor = (string) => {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const stringAvatar = (name) => {
    if (name) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickSignIn = () => {
    history("/signin");
  };
  return (
    <React.Fragment>
      {userName ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row-reverse",
            m: 2,
          }}
        >
          <Tooltip title="帳戶設定">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ pr: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar {...stringAvatar(userName)} />
            </IconButton>
          </Tooltip>
          <Link href="/" underline="none" variant="h6" sx={{ mx: 4 }}>
            履歷查看
          </Link>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "row-reverse",
            m: 2,
          }}
        >
          <IconButton onClick={handleClickSignIn} size="small" sx={{ pr: 2 }}>
            <Avatar />
          </IconButton>
          <Link href="/" underline="none" variant="h6" sx={{ mx: 4 }}>
            履歷查看
          </Link>
        </Box>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> 個人資訊
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          登出
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default AccountMenu;
