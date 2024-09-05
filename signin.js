import "../App.css";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { FacebookIcon } from "../Icons/customIcons";
import { GoogleIcon } from "../Icons/customIcons";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: "500",
    margin: "20px",
    boxShadow: "10px 10px 15px grey",
  };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (
      !/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(e.target.value)
    ) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        navigate("/dashboard", { state: { email: email } });
        // redirect to dashboard
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No user data found");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          ml: 80,
          mt: 20,
          width: 600,
          height: 120,
          align: "center",
        },
      }}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <Grid>
        <Paper elevation={3} style={paperStyle}>
          <Grid align="center">
            <Typography
              variant="h4"
              sx={{
                padding: "10px 0px 20px 0px",
                font: "32px Times New Roman",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Sign In
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <TextField
                  label="Email address"
                  placeholder="Email"
                  type="email"
                  fullWidth
                  reqired
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Password"
                  placeholder="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
            <Grid>
              <Link
                component="button"
                variant="body2"
                sx={{ display: "float", float: "right", padding: "15px 0px" }}
              >
                Forgot your password?
              </Link>
            </Grid>
            <Grid>
              <Button
                sx={{ width: "520px", height: "50px" }}
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Grid>
            <Grid sx={{ padding: "20px 0px" }}>
              <Typography>
                Don't have an account?{""}
                <RouterLink to="/signUp"> Sign Up</RouterLink>
              </Typography>
            </Grid>
            <Grid sx={{ padding: "0px 0px 20px" }}>
              <Divider>
                <Typography sx={{ color: "text.secondary" }}>Or</Typography>
              </Divider>
            </Grid>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Grid
                container
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
              >
                <Grid sx={6}>
                  <Button
                    type="submit"
                    variant="outlined"
                    onClick={() => alert("Sign in with Google")}
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                </Grid>
                <Grid sx={6}>
                  <Button
                    type="submit"
                    variant="outlined"
                    onClick={() => alert("Sign up with Facebook")}
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
}

export default SignIn;
