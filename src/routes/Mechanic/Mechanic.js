import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import Typography from '@material-ui/core/Typography';

import { mechanics } from '../../database/Database';

import '../Mechanic/Mechanic.css';

import db from '../../database/firebase';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


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
		rating: 0,
		text: ''
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		db.ref(`places/${id}`).on('value', snapshot => {
			this.setState({ mechanic: snapshot.val() });
			// console.log(snapshot.val())
		});
	}

	getNewRating = () => {
		const { mechanic, rating } = this.state;
		if (mechanic.rating) {
			const newRating = parseInt(mechanic.rating) + parseInt(rating);
			return newRating;
		} else {
			return rating;
		}
	}

	getRatingCount = () => {
		const { mechanic } = this.state;

		if (mechanic.ratingCount) {
			let newRatingCount = parseInt(mechanic.ratingCount) + 1;
			return newRatingCount;
		} else {
			return 1;
		}
	}

	handleSubmitRating = (e) => {
		e.preventDefault();
		// console.log(this.state.rating)
		const id = this.props.match.params.id;
		const { mechanic } = this.state;


		db.ref(`/places/${id}`).set({
			...mechanic,
			rating: this.getNewRating(),
			ratingCount: this.getRatingCount()
		});
	}

	handleChangeRating = (e) => {
		e.preventDefault();

		this.setState({
			rating: e.target.value
		})
	}

	getAverage = () => {
		const { mechanic } = this.state;
		if(mechanic.rating){
			return `${mechanic.rating / mechanic.ratingCount}/5`
		}else{
			return ''
		}
	}

	render() {
		const { classes } = this.props;
		const { value, mechanic } = this.state;

		const mapStyles = {
			width: '100%',
			height: '650px'
		}
		let splitCordinate = [0, 0];

		if (mechanic.coordinates) {
			splitCordinate = mechanic.coordinates.split(", ");
		}

		return (
			<React.Fragment>
				<h1 className="mechanic__header"> {mechanic.name} </h1>
				<p>{mechanic.street}, {mechanic.city}</p>
				<p>ocena: {this.getAverage().slice(0,4)}</p>

				<AppBar position="static">
					<Tabs
						value={value}
						onChange={this.handleChange}
						centered
					>
						{/* <Tab label="Usługi" /> */}
						<Tab label="Lokalizacja" />
						<Tab label="Ocena" />
					</Tabs>
				</AppBar>

				<SwipeableViews
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					{/* <TabContainer> Usługi </TabContainer> */}
					<TabContainer >

						<div style={mapStyles}>
							<Map
								google={this.props.google}
								zoom={18}
								center={{
									lat: splitCordinate[0],
									lng: splitCordinate[1]
								}}>
								<Marker onClick={this.onMarkerClick}
									name={'Current location'}
									title={'The marker`s title will appear as a tooltip.'}
									name={'SOMA'}
									position={{ lat: splitCordinate[0], lng: splitCordinate[1] }}
								/>

								<InfoWindow onClose={this.onInfoWindowClose}>
									<div>
									</div>
								</InfoWindow>
							</Map>
						</div>

					</TabContainer>
					<TabContainer>
						<form onSubmit={this.handleSubmitRating}>
							<input type="number" max="5" min="1" name="rating" onChange={this.handleChangeRating} />
							{/* <input type="text" placeholder="Tekst dla przykładu"/> */}
							<input type="submit" value="Dodaj ocenę" />
						</form>
					</TabContainer>

				</SwipeableViews>

			</React.Fragment>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyB_amRKdoVSbdFmSNB9wHW79fCRirU4h24")
})(Mechanic)

