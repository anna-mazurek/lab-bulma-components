import React from "react";

class CoolButton extends React.Component {
  render() {
    return (
      <div>
      <button className={this.props.className}>{this.props.action}</button>
      </div>
    );
  }
}

export default CoolButton;
