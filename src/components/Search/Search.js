import React from 'react';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class Search extends React.Component {



    render() {
        return (

            <form>
                <h2>Szukaj mechanika</h2>
                <TextField
                    required
                    id=""
                    defaultValue="Lokalizacja"
                    margin="normal"
                    variant="outlined"
                />
                   <TextField
                    required
                    id=""
                    defaultValue="Nazwa firmy"
                    margin="normal"
                    variant="outlined"
                />
                   <TextField
                    required
                    id=""
                    defaultValue="Specjalizacja"
                    margin="normal"
                    variant="outlined"
                />
                   <TextField
                    required
                    id=""
                    defaultValue="Marka samochodu"
                    margin="normal"
                    variant="outlined"
                />
              
            </form>


        )
    }
}

export default Search;