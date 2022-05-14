import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
              label="電子郵件"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="記住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登入
            </Button>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
