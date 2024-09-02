import "../App.css";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { FacebookIcon } from "../Icons/customIcons";
import { GoogleIcon } from "../Icons/customIcons";
function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: "500",
    margin: "20px",
    boxShadow: "10px 10px 15px grey",
  };
  function  navigatMethod(){
    fetch("https://www.google.com")
}
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
    >
      <Grid>
        <Paper elevation={3} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                label="Email address"
                placeholder="Email"
                type="email"
                fullWidth
                reqired
              />
            </Grid>
            <Grid size={12}>
              <TextField
                label="Password"
                placeholder="Password"
                type="password"
                fullWidth
                reqired
              />
            </Grid>
          </Grid>
          <Grid>
            <Link
              component="button"
              variant="body2"
              sx={{ display: "float", float: "right", padding: "15px" }}
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
              fullwidth
            >
              Sign In
            </Button>
          </Grid>
          <Grid>
            <br />
            <Typography>
              Don't have an account?<Link  onClick={() => navigatMethod()} href="www.google.com" target="_blank"> Sign Up</Link>
            </Typography>
          </Grid>
          <Grid>
            <br />
            <Divider>
              <Typography sx={{ color: "text.secondary" }}>Or</Typography>
            </Divider>
            <br />
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
        </Paper>
      </Grid>
    </Box>
  );
}

export default SignIn;
