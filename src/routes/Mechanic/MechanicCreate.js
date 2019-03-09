import React from 'react';

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
    fetch('https://jfdzl2-motoondo-2.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
		.then(response => response.json())
		.then(data => {
      this.props.history.push(`/mechanic/${data.name}`);
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
