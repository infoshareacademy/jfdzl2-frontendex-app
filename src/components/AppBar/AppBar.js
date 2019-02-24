import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


import './AppBar.css'

const styles = {
    appBar: {
      backgroundColor: 'rgba(157, 33, 179)',
    },
  };

class ApplicationBar extends React.Component {


    state = {
        open: false
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.toggleDrawer} >
                <List>
							<Link to="/"  onClick={this.toggleDrawer}>
								<ListItem button>
									<ListItemText> Home</ListItemText> 
								</ListItem>
							</Link>

							<Link to="/stats" onClick={this.toggleDrawer}>
								<ListItem button>
										<ListItemText>Stats</ListItemText>
								</ListItem>
							</Link>

							<Link to="/mechanic-list" onClick={this.toggleDrawer}>
								<ListItem button>
										<ListItemText>Mechanic List</ListItemText>
								</ListItem>
							</Link>

							<Link to="/mechanic" onClick={this.toggleDrawer}>
								<ListItem button>
										<ListItemText>Mechanic</ListItemText>
								</ListItem>
							</Link>

							<ListItem button >
									<ListItemText />
							</ListItem>
						</List>
                </Drawer>
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(ApplicationBar);