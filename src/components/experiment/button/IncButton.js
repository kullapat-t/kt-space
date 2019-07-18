import React from 'react';

class IncButton extends React.Component {

  state = { num: 0 };

  plus = (number) => {
    this.setState(prevState => ({
      num: prevState.num + number
    }))
  };

  render() {
    const { text, number, onAdjust } = this.props;
    return <button onClick={() => onAdjust(number)}> {text} {this.state.num}</button>
  }
}

export default IncButton