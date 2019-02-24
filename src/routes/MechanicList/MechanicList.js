import React from 'react';
import { mechanics, services, carBrand } from '../../database/Database'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import { Maps } from '@material-ui/icons';

class MechanicList extends React.Component {
	state = {
		mechanics: null
	}

	componentDidMount() {
		console.log(mechanics)
		this.setState({
			mechanics: mechanics
		})
	}

	render() {
		const { mechanics } = this.state;

		return (
			<div>
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