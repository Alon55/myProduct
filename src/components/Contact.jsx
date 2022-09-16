import React, { forwardRef, useState, FormEvent } from "react";
import {
  Container,
  Typography,
  Button,
  Dialog,
  Slide,
  Fab,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import validator from "validator";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkEmailValidation = (e) => {
    validator.isEmail(e) ? setIsNotValidEmail(false) : setIsNotValidEmail(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(
      JSON.stringify({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        message: data.get("message"),
      })
    );
  };

  return (
    <>
      <Fab
        style={{ position: "fixed", bottom: 20, right: 20 }}
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <ConnectWithoutContactIcon />
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              margin: "30px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={`${isNotValidEmail ? "Invalid " : ""}Email Address`}
                    name="email"
                    autoComplete="email"
                    error={isNotValidEmail}
                    onBlur={(e) => checkEmailValidation(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    id="message"
                    autoComplete="message"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClose}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </>
  );
}


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});