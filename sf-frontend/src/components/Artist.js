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
            <img src="https://vignette.wikia.nocookie.net/artists-i-follow/images/9/92/Kygo2019.JPG/revision/latest?cb=20190627210746" />
          </div>
        ))}
      </div>
    );
  }
}

export default Artist;
