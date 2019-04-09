import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'
import db from '../../database/firebase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './MechanicList.css'


class MechanicList extends React.Component {
	state = {
		mechanics: [],
		services: [],
		brands: []
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

		db.ref('/brands').on('value', snapshot => {
			const brands = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const brand = {
					id: elem[0],
					...elem[1]
				}
				brands.push(brand);
			});
			this.setState({
				brands
			})
		});
	}

	render() {
		const { mechanics, services, brands } = this.state;
		console.log(brands);
		return (

			<div className="grid-container">
				<Grid container spacing={16} >
				
					<Grid item xs={8} direction="row">
						{mechanics && mechanics.map((mechanic) => {

							return (

								<Grid container spacing={24} direction="column">
									<Grid item xs={12} key={`mechanic-${mechanic.id}`}>
										<Link to={`/mechanic/${mechanic.id}`}>

											<Paper className={`tile ${mechanic.status}`}>
												<Grid container direction="row" className="container-title">
													<Grid item xs={8} >{mechanic.name}</Grid>
													<Grid item xs={4} >RATING HERE </Grid>
												</Grid>
												<Divider />
												<Grid container direction="row" className="container-main">
													<Grid item xs={12} >

														<Typography >{mechanic.city}>>{mechanic.street} <Divider /></Typography>
														<Typography > {mechanic.brands.map((value) => {

															if (brands.length) {
																const brand = brands[value - 1];
																if (brand) {
																	console.log(brand.name);
																	return brand.name + ' ';
																} else {
																	return ''
																}


															}
														})}
															<Divider /></Typography>
													</Grid>

												</Grid>
											</Paper>

										</Link>
									</Grid>
								</Grid>
							)
						})}
					</Grid>

					<Grid item xs={4}>
						lorem ipsum
				{/* {services && services.map((service) => {
							return (
								{ service.name }
							)
						})} */}
					</Grid>
				</Grid>

			</div >
		)

	}
}

export default MechanicList;