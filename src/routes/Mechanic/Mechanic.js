import React, {Component} from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';

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
            <Tab label="Usługi" />
            <Tab label="Lokalizacja" />
            <Tab label="Ocena" />
          </Tabs>
        </AppBar>

				{value === 0 && <TabContainer>Usługi</TabContainer>}
        {value === 1 && <TabContainer>Lokalizacja</TabContainer>}
        {value === 2 && <TabContainer>Adres</TabContainer>} 

				<div> Footer </div>
			</React.Fragment>
		)
	}
}

export default Mechanic;
