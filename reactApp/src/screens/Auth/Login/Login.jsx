import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
// TODO remove, this demo shouldn't need to reset the theme.

export default function SignIn() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    userName: yup.string().required("UserName is required"),
    password: yup.string().min(6).required("Payment purpose is required"),
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios
          .post("https://enthusiastic-housecoat-bull.cyclic.app/users/login", {
            userName: values.userName,
            password: values.password,
          })
          .then(async (resa) => {
            console.log(resa);
            // // await axios.get("https://enthusiastic-housecoat-bull.cyclic.app/users").then((res) => {
            // //   res?.data?.find((user) => {
            // //     if (values.userName == user?.userName) {
            // //       if (user?.type == "customer") {
            // //         navigate("/");
            // //       } else {
            // //         navigate("/merchant");
            // //       }
            // //     }
            // //   });
            // // });
            // localStorage.setItem("token", resa?.data?.token);
            // console.log(resa?.data?.token);
          })
          .catch((e) => {
            alert(e);
          });
      } catch (error) {
        alert(error.message);
      }
    },
  });

  return (
    <Box>
      <Container component="main" sx={{ maxWidth: "550px" }} maxWidth={false}>
        <Card sx={{ p: 4, mt: 8 }}>
          <CssBaseline />
          <Box
            sx={{
              // marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1976D2" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
              noValidate
              sx={{ mt: 4 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="user Name"
                name="userName"
                autoComplete="userName"
                autoFocus
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Box></Box>
                <Box item>
                  <Link
                    to="/register"
                    variant="body2"
                    style={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
