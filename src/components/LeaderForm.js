import React from 'react';

class LeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputField.trim().toUpperCase());

    this.setState({
      inputField: ''
    });
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h3>Congratulations! You'll join the Leaderboard as #{this.props.rank}!</h3>
        <form onSubmit={this.submitHandler} className="leader-form">
        <h3>Enter your initials...</h3>
          <label htmlFor="initials">Initials:</label>
          <input id="initials"
                 autoFocus
                 type="text"
                 value={this.state.inputField}
                 placeholder="* * *"
                 maxLength="3"
                 required
                 pattern="[A-Za-z]{3}"
                 onChange={this.handleChange}/>
          <button type="submit">Enter Initials</button>
        </form>
      </div>
    );
  }
}

export default LeaderForm;
