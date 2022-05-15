import * as React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";
import { useNavigate } from "react-router-dom";

import axios from "../Axios.config";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  Divider,
  Link,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
const theme = createTheme();
function SignUp() {
  let history = useNavigate();

  const handleSubmit = (e) => {
    const json = JSON.stringify({ first_name: e.firstName, second_name: e.lastName , email: e.email, password: e.password });
      axios
        .post("api/signup", JSON.parse(json))
        .then((response) => {
          history("/signin");
        })
        .catch((error) => {
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
            註冊
          </Typography>
          <Box sx={{ mt: 3 }}>
            <FormContainer
              onSuccess={handleSubmit}
              FormProps={{
                "aria-autocomplete": "none",
                autoComplete: "new-password",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextFieldElement
                    required
                    fullWidth
                    size="small"
                    autoFocus
                    autoComplete={"given-name"}
                    label={"姓氏"}
                    name={"firstName"}
                    id="firstName"
                    parseError={parseError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldElement
                    required
                    fullWidth
                    size="small"
                    autoFocus
                    autoComplete={"family-name"}
                    label={"名字"}
                    name={"lastName"}
                    id="lastName"
                    parseError={parseError}
                  />
                </Grid>
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                註冊
              </Button>{" "}
            </FormContainer>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  已有帳號?
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }}>使用第三方帳號進行註冊</Divider>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
