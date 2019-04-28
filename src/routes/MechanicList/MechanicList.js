import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import db from '../../database/firebase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './MechanicList.css'

import { connect } from 'react-redux';
import { setPlaces } from '../../store/actions/places';
import { setServices } from '../../store/actions/services';
import { setBrands } from '../../store/actions/brands';

class MechanicList extends React.Component {


	componentDidMount() {

		const { filters } = this.props;

		db.ref('/places').on('value', snapshot => {
			const places = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const place = {
					id: elem[0],
					...elem[1]
				}
				places.push(place);
			});

			if (filters) {
				//wykonaj filtorwanie
			}

			this.props.setPlaces(places);

		});
		db.ref('//services').on('value', snapshot => {
			const services = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const service = {
					id: elem[0],
					...elem[1]
				}
				services.push(service);
			});

			this.props.setServices(services);
		})


		db.ref('/brands').on('value', snapshot => {
			const brands = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const brand = {
					id: elem[0],
					...elem[1]
				}
				brands.push(brand);
			});

			this.props.setBrands(brands);
		})
	}

	renderLoader = () => {
		return (
			<div style={{ paddingTop: '60px' }}>
				Ładowanie
			</div>
		)
	}



	renderPlaces = () => {
		const { places, brands, services } = this.props;
		return (

			<div className="grid-container">
				<Grid container spacing={16} >

					<Grid item xs={12} direction="row">
						{places && places.map((mechanic) => {

							return (

								<Grid container spacing={24} direction="column">
									<Grid item xs={12} key={`mechanic-${mechanic.id}`}>
										<Link className="no-decoration" to={`/mechanic/${mechanic.id}`}>

											<Paper className={`tile ${mechanic.status}`}>
												<Grid container direction="row" className="container-title">
													<Grid item xs={8} >{mechanic.name}</Grid>
													<Grid item xs={4} >RATING HERE </Grid>
												</Grid>
												<Divider />
												<Grid container direction="row" >

													<Grid item xs={12} >
														<div className="container-main" >
															<Typography >{mechanic.city}>>{mechanic.street} <Divider /></Typography>
															<Typography > {mechanic.services.map((value) => {

																if (services.length) {
																	const service = services[value - 1];
																	if (service) {
																		console.log(service.name);
																		return service.name + '>> ';
																	} else {
																		return ''
																	}


																}
															})}
																<Divider />
															</Typography>
														</div>
													</Grid>

												</Grid>
											</Paper>

										</Link>
									</Grid>
								</Grid>
							)
						})}
					</Grid>

				</Grid>

			</div >
		)

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
	filters: state.filters,
	brands: state.brands,
	services: state.services
});

const mapDispatchToProps = {
	setPlaces, setBrands, setServices
}

export default connect(mapStateToProps, mapDispatchToProps)(MechanicList);

