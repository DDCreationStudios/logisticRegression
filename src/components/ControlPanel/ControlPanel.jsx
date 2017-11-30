import React from "react";

const ControlPanel = props => (
  <div>
    <div className="row">
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("19")}
      >
        Up to 19 year olds
      </a>
      <a
        className="waves-effect waves-light btn teal lighten-1"
        onClick={() => props.switchAge("70+")}
      >
        From 70+ year olds
      </a>
    </div>
    <div className="row">
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={props.calcRegression}
      >
        Toggle Regression Curve
      </a>
    </div>
  </div>
);

export default ControlPanel;