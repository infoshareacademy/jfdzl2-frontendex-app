import React from 'react';
import db from '../../database/firebase';

class MechanicEdit extends React.Component {

  state = {
    name: '',
    street: '',
    city: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  componentDidMount() {


    const id = this.props.match.params.id;
    db.ref(`places/${id}`).on('value', snapshot => {
			this.setState(snapshot.val());
		});

}

  handleSubmit = event => {

    const id = this.props.match.params.id;
    db.ref(`/places/${id}`).set(this.state).then(data => {
      this.props.history.push(`/mechanic/${id}`);
    });
  }

  render() {
    return(
      <div>
        <h1>Edit mechanic</h1>
        <div>
          <div>
            Name:
            <input type="text" defaultValue={this.state.name} name="name" onChange={this.handleChange}  />
          </div>
          <div>
            Street:
            <input type="text" defaultValue={this.state.street} name="street" onChange={this.handleChange} />
          </div>
          <div>
            City:
            <input type="text" defaultValue={this.state.city} name="city" onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Zmień dane</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MechanicEdit;
