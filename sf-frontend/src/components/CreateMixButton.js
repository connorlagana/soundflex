import React from "react";

const CreateMixButton = (props) => {
  return (
    <div>
      <button onClick={props.createMix}>Create Mix</button>
    </div>
  );
};

export default CreateMixButton;
