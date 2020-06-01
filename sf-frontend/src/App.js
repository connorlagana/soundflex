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
        instrumental: ["instrumental1", "instrumental2", "instrumental3"],
        firstV: ["firstV1", "firstV2", "firstV3"],
        secondV: ["secondV1", "secondV2", "secondV3"],
        vox: ["vox1", "vox2", "vox3"],
        drop: ["drop1", "drop2"],
        chorus: ["chorus1", "chorus2", "chorus3", "chorus4"],
        // name: ["bigbootie18"],
      },
      types: [
        {
          title: "Instrumentals",
          songs: [
            {
              artist: "Alan Walker",
              name: "Tired",
              wavTitle: "instrumental1",
              image:
                "https://edmnations.com/wp-content/uploads/2019/12/2f0b3d610f3063f614c615eda2c13e18.jpg",
            },
            {
              artist: "Galantis",
              name: "Idk",
              wavTitle: "instrumental2",
              image:
                "https://weraveyou.com/wp-content/uploads/2019/09/galantis.jpg",
            },
            {
              artist: "Martin Garrix",
              name: "I Forgot",
              wavTitle: "instrumental3",
              image:
                "https://weraveyou.com/wp-content/uploads/2020/03/martin-garrix-concentrating-ultra-australia-2019-rukes.jpg",
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
              image:
                "https://tigerbeat.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-01-at-10.30.17-AM-960x637.png",
            },
            {
              artist: "Aloe Blacc",
              name: "Wake Me Up",
              wavTitle: "firstV2",
              image:
                "https://montecristomagazine.com/wp-content/uploads/2018/11/Arts_Page_1_Image_0001.jpg",
            },
            {
              artist: "Aloe Blacc",
              name: "I Forgot",
              wavTitle: "firstV3",
              image:
                "https://montecristomagazine.com/wp-content/uploads/2018/11/Arts_Page_1_Image_0001.jpg",
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
              image:
                "https://www3.pictures.zimbio.com/gi/Pink+Live+At+The+Forum+E0ivBjd96Q-x.jpg",
            },
            {
              artist: "Lil Wayne",
              name: "Down",
              wavTitle: "secondV2",
              image:
                "https://static01.nyt.com/images/2020/02/10/arts/10billboard-item/merlin_160451739_db4763df-712c-41ec-8447-d32a698d1857-superJumbo.jpg",
            },
            {
              artist: "Trevor Daniel",
              name: "Falling",
              wavTitle: "secondV3",
              image:
                "https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/trevor-daniel-20191209.jpg",
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
              image:
                "https://pbs.twimg.com/profile_images/520252993640202240/Hc9zuRkZ_400x400.png",
            },
            {
              artist: "Shrek",
              name: "Waffles",
              wavTitle: "vox2",
              image:
                "https://cdn.vox-cdn.com/thumbor/c9lOADgzGrJt7XpVYy9-oomxrQY=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54014617/shrek.0.jpg",
            },
            {
              artist: "Michelle Obama",
              name: "Sweet Potato",
              wavTitle: "vox3",
              image:
                "https://www.biography.com/.image/t_share/MTY2NjgyMjEwMDQzMTc1OTkx/michelle_obama_first_official_portrait_as_first_lady.jpg",
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
              image:
                "https://pbs.twimg.com/profile_images/1158449629459079168/WZlBjXar_400x400.jpg",
            },
            {
              artist: "Alan Walker",
              name: "idk",
              wavTitle: "drop2",
              image:
                "https://edmnations.com/wp-content/uploads/2019/12/2f0b3d610f3063f614c615eda2c13e18.jpg",
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
              image:
                "https://lanthorn.com/wp-content/uploads/2019/02/blackbear.jpg",
            },
            {
              artist: "Owl City",
              name: "Verge",
              wavTitle: "chorus2",
              image:
                "https://studybreaks.com/wp-content/uploads/2016/03/OwlCity_140716_620.jpg",
            },
            {
              artist: "Pink",
              name: "Get This Party Started",
              wavTitle: "chorus3",
              image:
                "https://www3.pictures.zimbio.com/gi/Pink+Live+At+The+Forum+E0ivBjd96Q-x.jpg",
            },
            {
              artist: "AJ Mitchell",
              name: "Slow Dance",
              wavTitle: "chorus4",
              image:
                "https://tigerbeat.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-01-at-10.30.17-AM-960x637.png",
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

    let count = 0;

    for (const el in this.state.mix) {
      // console.log(this.state.mix[el]);

      for (const j in this.state.mix[el]) {
        count += 1;
      }
      console.log(count);
    }

    // axios.post("http://localhost:3001", this.state.mix);

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
