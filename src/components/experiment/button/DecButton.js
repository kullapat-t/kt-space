import React from 'react';

class DecButton extends React.Component {

  state = { num: 0 };

  render() {
    const { text, number, onAdjust } = this.props;
    return <button onClick={() => onAdjust(-number)}> {text} {number}</button>
  }
}

export default DecButton