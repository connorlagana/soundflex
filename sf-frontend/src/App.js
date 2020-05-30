import React, { Component } from "react";
import "./App.scss";
import overlay from "./nodePart/mixmash3.wav";

import { makeNewMix } from "./services/api_helper";

// import pyScript from "./nodePart/mash.py";

import axios from "axios";

import TypeList from "./components/TypeList";
import CreateMixButton from "./components/CreateMixButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: overlay,
      mix: {
        instrumental: "instrumental1",
        firstV: "firstV2",
        secondV: "secondV1",
        vox: "vox2",
        drop: "drop1",
        chorus: "chorus2",
        name: "consmix3",
      },
      types: [
        {
          title: "Instrumentals",
          songs: [
            {
              artist: "Alan Walker",
              name: "Tired",
            },
            {
              artist: "Galantis",
              name: "Idk",
            },
            {
              artist: "Martin Garrix",
              name: "I Forgot",
            },
          ],
        },
        {
          title: "First Verses",
          songs: [
            {
              artist: "hihdi",
              name: "Tired",
            },
            {
              artist: "ffff",
              name: "Idk",
            },
            {
              artist: "klkokomfd",
              name: "I Forgot",
            },
          ],
        },
      ],
      chosenSong: "",
    };
  }

  obj = {
    instrumental: "instrumental3",
    firstV: "firstV2",
    secondV: "secondV1",
    vox: "vox2",
    drop: "drop1",
    chorus: "chorus2",
    name: "consmix2",
  };

  createMix = async (e, musicData) => {
    e.preventDefault();
    console.log("creating a mix");
    console.log(this.obj);

    // await makeNewMix(musicData);
    console.log("herro");

    axios.post("http://localhost:3001", this.state.mix);

    // let songCreated = `https://media.vocaroo.com/mp3/${this.state.songs[2].mp3Id}`;

    // let audio = new Audio(songCreated);

    // audio.play();
  };

  render() {
    return (
      <div className="App">
        <div id="title">Sound Flex</div>
        <TypeList types={this.state.types} />
        <CreateMixButton createMix={this.createMix} />
      </div>
    );
  }
}

export default App;
