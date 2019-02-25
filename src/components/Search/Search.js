import React from 'react';
import TextField from '@material-ui/core/TextField';


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