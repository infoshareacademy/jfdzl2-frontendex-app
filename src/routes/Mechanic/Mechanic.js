import React, { Component } from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import Typography from '@material-ui/core/Typography';

import '../Mechanic/Mechanic.css';

import firebase from '../../database/firebase';


function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};


class Mechanic extends Component {
	state = {
		value: 0,
		mechanic: {},
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	componentDidMount() {

		// GET /places/{:id}.json

		const id = this.props.match.params.id;
		fetch(`https://jfdzl2-motoondo-2.firebaseio.com/places/${id}.json`)
		.then(response => response.json())
		.then(data => {
			this.setState({ mechanic: data });
		})

		// firebase.database.collection("brands").get().then(function (querySnapshot) {
		// 	querySnapshot.forEach(function (doc) {
		// 		// doc.data() is never undefined for query doc snapshots
		// 		console.log(doc.id, " => ", doc.data());
		// 	});
		// });


	}

	render() {
		const { classes } = this.props;
		const { value, mechanic } = this.state;

		return (
			<React.Fragment>
				<h1 className="mechanic__header"> {mechanic.name} </h1>
				<p>{mechanic.street}, {mechanic.city}</p>

				<AppBar position="static">
					<Tabs
						value={value}
						onChange={this.handleChange}
						centered
					>
						<Tab label="Usługi" />
						<Tab label="Lokalizacja" />
						<Tab label="Ocena" />
					</Tabs>
				</AppBar>

				<SwipeableViews
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainer> Usługi </TabContainer>
					<TabContainer> Lokalizacja </TabContainer>
					<TabContainer> Ocena </TabContainer>

				</SwipeableViews>

				<div> Footer </div>
			</React.Fragment>
		)
	}
}

export default Mechanic;
