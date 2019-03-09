import React from 'react';

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

    // GET /places/{:id}.json

    const id = this.props.match.params.id;
    fetch(`https://jfdzl2-motoondo-2.firebaseio.com/places/${id}.json`)
    .then(response => response.json())
    .then(data => {
        this.setState(data);
    })

    // firebase.database.collection("brands").get().then(function (querySnapshot) {
    // 	querySnapshot.forEach(function (doc) {
    // 		// doc.data() is never undefined for query doc snapshots
    // 		console.log(doc.id, " => ", doc.data());
    // 	});
    // });


}

  handleSubmit = event => {

    const id = this.props.match.params.id;
    fetch(`https://jfdzl2-motoondo-2.firebaseio.com/places/${id}.json`, {
      method: 'PATCH',
      body: JSON.stringify(this.state)
    })
		.then(response => response.json())
		.then(data => {
      this.props.history.push('/mechanic-list');
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
