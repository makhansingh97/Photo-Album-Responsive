import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" >
              Hello everyone this is photo album and I'm trying to make this
              sentence as long as possible to see how it looks
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
