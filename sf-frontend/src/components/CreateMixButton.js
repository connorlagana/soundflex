import React, { Component } from "react";

class CreateMixButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {
        vox: "fuck",
      },
    };
  }

  handleMix = (e) => {
    this.props.createMix(e, {
      vox: "lonely",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleMix}>Create Mix</button>
      </div>
    );
  }
}

export default CreateMixButton;
