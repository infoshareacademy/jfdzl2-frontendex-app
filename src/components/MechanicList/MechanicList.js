import React from 'react';
import {mechanics, services, carBrand} from '../../database/Database'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

class MechanicList extends React.Component {
    state = {
        mechanics: null
    }

    componentDidMount(){
        this.setState({
            mechanics: mechanics
        })
    }

    render() {
        const {mechanics} = this.state;

        return (
            <div>
                <Table>
                    <TableRow>
                {mechanics && mechanics.map((mechanic) => {
                    return (
                        <div>
                            {mechanic.name}
                            
                            </div>
                    )
                })}
                </TableRow>
                </Table>
            </div>
        )
    }

}

export default MechanicList;