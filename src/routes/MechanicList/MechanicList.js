import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

import { connect } from 'react-redux';
import { setPlaces } from '../../store/actions/places';

import db from '../../database/firebase';

class MechanicList extends React.Component {


	componentDidMount() {

		const {filters} = this.props;

		db.ref('/places').on('value', snapshot => {
			const places = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const place = {
					id: elem[0],
					...elem[1]
				}
				places.push(place);
			});

			if(filters){
				//wykonaj filtorwanie
			}

			this.props.setPlaces(places);

		});
	}

	renderLoader = () => {
		return (
			<div style={{paddingTop: '60px'}}>
				Ładowanie
			</div>
		)
	}

	renderPlaces = () => {
		const { places } = this.props;

		return (<div>
			<Table>
				<TableHead>
					<TableRow >
						<TableCell>nazwa</TableCell>
						<TableCell>ulica</TableCell>
						<TableCell>miasto</TableCell>
						<TableCell></TableCell>

					</TableRow>
				</TableHead>

				<TableBody>

					{places && places.map((mechanic) => {
						return (

							<TableRow key={`mechanic-${mechanic.id}`}>

								<TableCell >
									{mechanic.name}
								</TableCell>
								<TableCell >
									{mechanic.street}
								</TableCell>
								<TableCell >
									{mechanic.city}

								</TableCell>
								<TableCell>
									<Link to={`/mechanic/${mechanic.id}`}><Icon>directions_car</Icon> zobacz warsztat </Link>
								</TableCell>
								<TableCell >
									<Link to={`/edit/${mechanic.id}`}><button>Edytuj</button></Link>

								</TableCell>

							</TableRow>)
					})}
				</TableBody>

			</Table>
		</div>)


	}

	render() {
		const { places } = this.props;

		return (
			<>
				{places.length && this.renderPlaces()}
				{!places.length && this.renderLoader()}
			</>
		)
	}

}

const mapStateToProps = state => ({
	places: state.places,
	filters: state.filters
});

const mapDispatchToProps = {
	setPlaces
}

export default connect(mapStateToProps, mapDispatchToProps)(MechanicList);
