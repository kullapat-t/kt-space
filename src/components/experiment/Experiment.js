import React from 'react';
import IncButton from './button/IncButton'
import DecButton from './button/DecButton'
import './experiment.scss';

class Experiment extends React.Component {

  state = { num: 0 };

  onAdjust = (number) => {
    this.setState(prevState => ({
      num: prevState.num + number
    }))
  };

  render() {
    return(
      <div className="Experiment">
        <div>
          <h2>Plus / Minus</h2>
        </div>
        <h3>{this.state.num}</h3>
        <div>
          <IncButton text={"Increase ( + ): "} number={1} onAdjust={this.onAdjust}/>
          <DecButton text={"Decrease ( - ): "} number={1} onAdjust={this.onAdjust}/>
        </div>
      </div>
    )
  }
};

export default Experiment;