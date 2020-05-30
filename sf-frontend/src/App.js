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
              wavTitle: "instrumental1",
            },
            {
              artist: "Galantis",
              name: "Idk",
              wavTitle: "instrumental2",
            },
            {
              artist: "Martin Garrix",
              name: "I Forgot",
              wavTitle: "instrumental3",
            },
          ],
        },
        {
          title: "First Verses",
          songs: [
            {
              artist: "AJ Mitchell",
              name: "Slow Dance",
              wavTitle: "firstV1",
            },
            {
              artist: "Aloe Blacc",
              name: "Wake Me Up",
              wavTitle: "firstV2",
            },
            {
              artist: "Aloe Blacc",
              name: "I Forgot",
              wavTitle: "firstV3",
            },
          ],
        },
        {
          title: "Second Verses",
          songs: [
            {
              artist: "Pink",
              name: "Get This Party Started",
              wavTitle: "secondV1",
            },
            {
              artist: "Lil Wayne",
              name: "Down",
              wavTitle: "secondV2",
            },
            {
              artist: "Trevor Daniel",
              name: "Falling",
              wavTitle: "secondV3",
            },
          ],
        },
        {
          title: "Adlibs",
          songs: [
            {
              artist: "Vine",
              name: "2 shots of vodka",
              wavTitle: "vox1",
            },
            {
              artist: "Shrek",
              name: "Waffles",
              wavTitle: "vox2",
            },
            {
              artist: "Michelle Obama",
              name: "Sweet Potato",
              wavTitle: "vox3",
            },
          ],
        },
        {
          title: "Drops",
          songs: [
            {
              artist: "Raven & Kreyn",
              name: "idk",
              wavTitle: "drop1",
            },
            {
              artist: "Alan Walker",
              name: "idk",
              wavTitle: "drop2",
            },
          ],
        },
        {
          title: "Choruses",
          songs: [
            {
              artist: "Blackbear",
              name: "Idwk",
              wavTitle: "chorus1",
            },
            {
              artist: "Owl City",
              name: "Verge",
              wavTitle: "chorus2",
            },
            {
              artist: "Pink",
              name: "Get This Party Started",
              wavTitle: "chorus3",
            },
            {
              artist: "AJ Mitchell",
              name: "Slow Dance",
              wavTitle: "chorus4",
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
