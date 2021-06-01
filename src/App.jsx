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
  CardContent,
  CardActions,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
              Hello everyone this is photo album and I'm trying to make this
              sentence as long as possible to see how it looks
            </Typography>
          </Container>
        </div>
        <div className={classes.button}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See all photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary Action
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image Title"
                    image="https://source.unsplash.com/random"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media Card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      VIEW
                    </Button>
                    <Button size="small" color="primary">
                      EDIT
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give footer a purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
