import React, { Component } from "react";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="artistList">
        {this.props.artists.map((artist) => (
          <div className="artist">
            <div id="artistTitle">{artist.artist}</div>
            <img src={artist.image} />
            <button>Add to mix</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Artist;
