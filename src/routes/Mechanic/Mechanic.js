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
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		db.ref(`places/${id}`).on('value', snapshot => {
			this.setState({ mechanic: snapshot.val() });
			console.log(snapshot.val())
		});

	}

	render() {
		const { classes } = this.props;
		const { value, mechanic } = this.state;

		const mapStyles = {
			width: '100%',
			height: '650px'
		}

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
					<TabContainer >

						<div style={mapStyles}>
							<Map
								google={this.props.google}
								zoom={18}
								initialCenter={{
									lat: 51.2503143,
									lng: 22.570589
								}}>
								<Marker onClick={this.onMarkerClick}
									name={'Current location'}
									title={'The marker`s title will appear as a tooltip.'}
									name={'SOMA'}
									position={{ lat: 51.2503143, lng: 22.570589 }} />

								/>

								<InfoWindow onClose={this.onInfoWindowClose}>
									<div>
									</div>
								</InfoWindow>
							</Map>
						</div>

					</TabContainer>
					<TabContainer> Ocena </TabContainer>

				</SwipeableViews>

				<div> Footer </div>
			</React.Fragment>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyB_amRKdoVSbdFmSNB9wHW79fCRirU4h24")
})(Mechanic)

