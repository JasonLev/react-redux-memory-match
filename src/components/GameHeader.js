import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import DifficultySelector from './DifficultySelector';

class GameHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      reset: false,
    }
    this.toggleReset = this.toggleReset.bind(this);
    this.changeGame = this.changeGame.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }
  toggleReset(){
    this.setState({
      reset: !this.state.reset
    });
    this.props.handleChange("stage",null);
  }
  changeDifficulty(e){
    this.props.handleChange("difficulty", e.target.value);
  }
  changeGame(){
    if (this.props.gameStage === "started" || this.props.gameStage === "active") {
      this.props.handleChange("stage","paused");
    } else if (this.props.gameStage === "paused") {
      this.props.handleChange("stage","active");
    } else {
      this.props.handleChange("stage","started");
    }
  }
  render() {
    return (
      <div>
        {this.props.gameStage == null && <DifficultySelector handleDifficulty={this.changeDifficulty} difficulty={this.props.difficulty} />}
        <Button handleClick={this.changeGame}
                gameStage={this.props.gameStage} />
        {(this.props.gameStage === "started" ||
          this.props.gameStage === "active" ||
          this.props.gameStage === "paused") &&
          <Button handleReset={this.toggleReset} resetBtn={true} />
        }
        <Timer initTime={0}
               gameStage={this.props.gameStage}
               reset={this.state.reset}
               changeScore={this.props.handleChange}
               toggleReset={this.toggleReset} />
      </div>
    );
  }
}

export default GameHeader;
