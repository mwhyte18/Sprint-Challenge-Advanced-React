import React from "react";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log("component mounted");
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ players: result });
      })
      .catch(err => console.log("Error fetching players.", err));
  }

  render() {
    return (
      <div className="list">
        <h2>Players:</h2>
        <div className="players" data-testid="player">
          {this.state.players.map(item => (
            <div className="player">
              <p>{item.name}</p>
              <p>{item.country}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Players;
