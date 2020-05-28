import React, { Component } from "react";
import "./App.scss";
import overlay from "./nodePart/mixmash3.wav";

// import pyScript from "./nodePart/mash.py";

import axios from "axios";

import SongList from "./components/SongList";
import CreateMixButton from "./components/CreateMixButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: overlay,
      songs: [
        {
          title: "IDWK",
          artist: "blackbear",
          mp3Id: "hf6G7EdLvPM",
          type: "chorus",
        },
        {
          title: "Tired",
          artist: "Alan Walker",
          mp3Id: "5PS4AV1VWDh",
          type: "instrumental",
        },
        {
          title: "idk the name lol",
          artist: "Galantis",
          mp3Id: "8fmmlMH404Y",
          type: "instrumental",
        },
      ],
      chosenSong: "",
    };
  }

  createMix = async () => {
    console.log("creating a mix");

    // await axios.get("http://localhost:3001");

    let songCreated = `https://media.vocaroo.com/mp3/${this.state.songs[2].mp3Id}`;

    let audio = new Audio(songCreated);

    audio.play();
  };

  render() {
    return (
      <div className="App">
        <div>Hello World</div>
        <SongList songs={this.state.songs} />
        <CreateMixButton createMix={this.createMix} />
      </div>
    );
  }
}

export default App;
