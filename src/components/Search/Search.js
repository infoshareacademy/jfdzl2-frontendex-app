import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Search extends React.Component {

    render() {

        return (

            <form>
                <h2>Szukaj mechanika</h2>
                <TextField

                    id="input-with-icon-textfield"
                    label="Szukaj wartsztatów"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon="search" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField

                    id="input-with-icon-textfield"
                    label="Szukaj wartsztatów"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon="search" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField

                    id="input-with-icon-textfield"
                    label="Szukaj wartsztatów"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon="search" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField

                    id="input-with-icon-textfield"
                    label="Szukaj wartsztatów"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon="search" />
                            </InputAdornment>
                        ),
                    }}
                />

            </form>


        )
    }
}

export default Search;