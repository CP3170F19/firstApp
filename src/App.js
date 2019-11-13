import React, { Component } from "react";
import logo from "./logo.svg";
import ReactAudioPlayer from "react-audio-player";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import {
  Button,
  Paper,
  Grid,
  Checkbox,
  GridList,
  GridListTile,
  Slider,
  Avatar
} from "@material-ui/core";
import Example1 from "./example1";
import Sound from "react-sound";
import "./App.css";
import Inbox from "./inbox";
class App extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    display: 0,
    images: [
      { img: "chicken.png", col: 2 },
      { img: "crab.png", col: 3 },
      { img: "dolphin.png", col: 1 },
      { img: "gold-fish.png", col: 2 }
    ],
    value: 10
  };

  handleChange = ch => {
    this.setState({ [ch]: !this.state[ch] });
  };
  handleControl = x => {
    this.setState({ display: x });
  };
  handleVolum = (event, newValue) => {
    console.log("newvalue= ", newValue);
    this.setState({ value: newValue });
  };
  render() {
    return (
      <React.Fragment>
        <Avatar
          alt="Remy Sharp"
          src="/images/gold-fish.png"
          style={{ backgroundColor: "gray" }}
        />
        {/* <ReactAudioPlayer
          src="./sound/gamaron.mp3"
          volume={0.2}
          autoPlay
          onPause={() => this.setState({ display: !this.state.display })}
        /> */}
        <Sound
          url="./sound/gamaron.mp3"
          playStatus={
            this.state.display === 0
              ? Sound.status.PLAYING
              : this.state.display === 1
              ? Sound.status.PAUSE
              : Sound.status.STOPPED
          }
          volume={this.state.value}
          // playFromPosition={300 /* in milliseconds */}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <VolumeUp />{" "}
        <Slider
          style={{ width: "20vw" }}
          value={this.state.value}
          onChange={this.handleVolum}
        />{" "}
        <VolumeDown />
        <Button onClick={() => this.handleControl(0)}>Play</Button>
        <Button onClick={() => this.handleControl(1)}>Pause</Button>
        <Button onClick={() => this.handleControl(2)}>Stop</Button>
        <Inbox />
        <Paper
          elevation={5}
          style={{ backgroundColor: "lightblue", width: "50vmax" }}
        >
          <Checkbox
            checked={this.state.checkedA}
            onChange={() => this.handleChange("checkedA")}
            value="checkedA"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
          <Checkbox
            checked={this.state.checkedB}
            disabled={!this.state.checkedA}
            onChange={() => this.handleChange("checkedB")}
            value="checkedB"
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
          <Checkbox
            value="checkedC"
            inputProps={{
              "aria-label": "uncontrolled-checkbox"
            }}
          />
          <Checkbox
            disabled
            value="checkedD"
            inputProps={{
              "aria-label": "disabled checkbox"
            }}
          />
          <Checkbox
            disabled
            checked
            value="checkedE"
            inputProps={{
              "aria-label": "disabled checked checkbox"
            }}
          />
          <Checkbox
            checked={this.state.checkedF}
            onChange={() => this.handleChange("checkedF")}
            value="checkedF"
            indeterminate
            inputProps={{
              "aria-label": "indeterminate checkbox"
            }}
          />
          <Checkbox
            defaultChecked
            color="default"
            value="checkedG"
            inputProps={{
              "aria-label": "checkbox with default color"
            }}
          />
        </Paper>
        {/* {this.state.checkedA ? <Example1 /> : null}
        <GridList cellHeight={160} style={{ width: 500, height: 100 }} cols={3}>
          {this.state.images.map(tile => (
            <GridListTile cols={tile.col || 1}>
              <img src={`./images/${tile.img}`} style={{ height: 100 }} />
            </GridListTile>
          ))}
        </GridList> */}
      </React.Fragment>
    );
  }
}

export default App;
