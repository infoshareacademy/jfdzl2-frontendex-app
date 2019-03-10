import React from 'react';
import { services, carBrand } from '../../database/Database'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import { Maps } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import db from '../../database/firebase';
import './MechanicList.css'



class MechanicList extends React.Component {
	state = {
		mechanics: []
	}

	componentDidMount() {
		db.ref('/places').on('value', snapshot => {
			const places = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const place = {
					id: elem[0],
					...elem[1]
				}
				places.push(place);
			});
			this.setState({
				mechanics: places
			})
		});
	}

	render() {
		const { mechanics } = this.state;

		return (
			<div className="table-container">
				<Table>
					<TableHead>
						<TableRow >
							<TableCell>NAZWA</TableCell>
							<TableCell>ULICA</TableCell>
							<TableCell>MIASTO</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>

						</TableRow>
					</TableHead>

					<TableBody>
						{mechanics && mechanics.map((mechanic) => {
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

								</TableRow>

							)
						})}
					</TableBody>

				</Table>
			</div>
		)
	}

}

export default MechanicList;
