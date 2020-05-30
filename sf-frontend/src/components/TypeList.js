import React, { Component } from "react";
import Artist from "./Artist";

class TypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="types">
        {this.props.types.map((type) => (
          <div className="type">
            <div id="chooseFrom">Choose from the list of {type.title}</div>
            <div className="artistList">
              <Artist artists={type.songs} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TypeList;
