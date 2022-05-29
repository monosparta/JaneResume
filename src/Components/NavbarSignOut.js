import * as React from "react";
import { Box, IconButton, Avatar, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AccountMenu() {
  let history = useNavigate();

  const handleClickSignIn = () => {
    history("/signin");
  };
  const handleClickResume = () => {
    history("/");
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
    /* eslint-enable no-bitwise */

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
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "row-reverse",
          m:2
        }}
      >
        <IconButton onClick={handleClickSignIn} size="small" sx={{ pr: 2 }}>
          <Avatar />
        </IconButton>
        <Link href="/" underline="none" variant="h6" sx={{mx:4}}>
          履歷查看
        </Link>
      </Box>
    </React.Fragment>
  );
}
export default AccountMenu;
