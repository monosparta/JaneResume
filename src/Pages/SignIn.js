import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  Link,
  Divider,
  Container,
  Snackbar,
} from "@mui/material";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import axios from "../Axios.config";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SignIn() {
  let history = useNavigate();
  const [open, setOpen] = useState(false);
  const [submitDetail, setsubmitDetail] = useState("");
  const [snackBarType, setsnackBarType] = useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = (e) => {
    const json = JSON.stringify({
      email: e.email,
      password: e.password,
    });
    axios
      .post("api/signin", JSON.parse(json))
      .then((response) => {
        setsnackBarType("success");
        setsubmitDetail(response.data["detail"]);
        setOpen(true);
        localStorage.setItem("token", response.data["token"]);
        setTimeout(() => history("/"), 3000);
      })
      .catch((error) => {
        setsnackBarType("error");
        setsubmitDetail(error.response.data["detail"]);
        setOpen(true);
      });
  };
  const parseError = (error) => {
    if (error.type === "pattern") {
      return "請輸入正確的電子郵件格式";
    }
    if (error.type === "validate" && error.ref.name === "password") {
      return "密碼八個字元以上，至少包含一個字母和一個數字：";
    }
    return "此欄位必填";
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登入
          </Typography>
          <Box sx={{ mt: 1 }}>
            <FormContainer
              onSuccess={handleSubmit}
              FormProps={{
                "aria-autocomplete": "none",
                autoComplete: "new-password",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldElement
                    required
                    size="small"
                    type={"email"}
                    label={"電子郵件"}
                    fullWidth
                    parseError={parseError}
                    id="email"
                    autoComplete="email"
                    name={"email"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordElement
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="密碼"
                    type="password"
                    id="password"
                    parseError={parseError}
                    validation={{
                      validate: (value) => {
                        if (
                          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
                        ) {
                          return "Password should match";
                        }
                      },
                    }}
                    autoComplete="new-password"
                  />
                </Grid>{" "}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登入
              </Button>
            </FormContainer>
            <Grid container>
              <Grid item xs>
                <Link href="/forgetpassword" variant="body2">
                  忘記密碼
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  尚未註冊
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }}>使用第三方帳號進行登入</Divider>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <GoogleIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <GitHubIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <FacebookIcon />
                </Avatar>
              </Grid>
            </Grid>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={snackBarType}
              sx={{ width: "100%" }}
            >
              {submitDetail}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
