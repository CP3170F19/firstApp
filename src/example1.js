import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Icon } from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
class Example1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                style={{ flex: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={{ flex: 1 }} variant="h6">
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Icon>add_circle</Icon>
          <Icon>star</Icon>
          <Icon>Grade</Icon>
          <PlayCircleFilledWhiteIcon color="secondary" fontSize="large" />
          <AdbIcon fontSize="large" style={{ color: "red" }} />
        </Container>
        <Grid container spacing={15} style={{ flexGrow: 1 }}>
          <Grid item xs={4} style={{ backgroundColor: "lightblue" }}>
            {" "}
            <Typography variant="h3">Hello Grid1</Typography>
          </Grid>
          <Grid item xs={5} style={{ backgroundColor: "darkred" }}>
            {" "}
            <h1>Hello Grid2</h1>
          </Grid>
          <Grid item xs={5} style={{ backgroundColor: "lightgreen" }}>
            {" "}
            <h1>Hello Grid3</h1>
          </Grid>
          <Grid item xs={3} style={{ backgroundColor: "green" }}>
            {" "}
            <h1>Hello Grid4</h1>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Example1;
