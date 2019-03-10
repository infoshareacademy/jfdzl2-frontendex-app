import React from 'react';

import db from '../../database/firebase';

class MechanicCreate extends React.Component {

  state = {
    name: '',
    street: '',
    city: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    db.ref('/places').push(this.state).then(data => {
      this.props.history.push(`/mechanic/${data.key}`);
    });
  }

  render() {
    return(
      <div>
        <h1>Create new Mechanic</h1>
        <div>
          <div>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            Street:
            <input type="text" name="street" onChange={this.handleChange} />
          </div>
          <div>
            City:
            <input type="text" name="city" onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Send me please</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MechanicCreate;
