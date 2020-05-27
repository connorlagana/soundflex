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
          title: "Summer",
          artist: "Calvin Harris",
        },
        {
          title: "Right Round",
          artist: "Flo Rida",
        },
        {
          title: "Miami 82",
          artist: "Syn Cole",
        },
        {
          title: "Nights Like This",
          artist: "Loud Luxury",
        },
      ],
    };
  }
  audio = new Audio(overlay);

  createMix = async () => {
    console.log("creating a mix");

    await axios.post("http://localhost:3001");

    this.audio.play();
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
