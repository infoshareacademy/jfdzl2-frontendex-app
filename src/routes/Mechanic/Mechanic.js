import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Mechanic extends Component{ 
	state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
	};
	
	render(){ 
		const { classes } = this.props;
		const { value } = this.state;
		
		return(
			<React.Fragment>
				<h1> Nazwa zakładu mechanicznego/Heading </h1> 

				<AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>

				<div> Usługi </div>
				<div> Ocena</div>
				<div> Adres</div>

				<div> Footer </div>
			</React.Fragment>
		)
	}
}

export default Mechanic;
