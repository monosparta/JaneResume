import * as React from "react";
import { Snackbar, Grid, Typography, ListItemText } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useState, useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarStyle(props) {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={props.snackBarType}
        sx={{ width: "100%" }}
      >
        {props.submitDetail}
      </Alert>
    </Snackbar>
  );
}
export default SnackbarStyle;
