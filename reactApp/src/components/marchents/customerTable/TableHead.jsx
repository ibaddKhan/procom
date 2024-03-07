import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable() {
    return (
        <TableContainer>
            <Table component={Paper} sx={{ minWidth: 650, maxWidth: 1000, backgroundColor: '#1976d2' }} aria-label="simple table">

                <TableHead>
                    <TableRow >
                        <TableCell width={300} sx={{ color: '#fff' }}> Name </TableCell>
                        <TableCell width={300} sx={{ color: '#fff' }}> Email </TableCell>
                        <TableCell width={200} sx={{ color: '#fff' }}> Phone </TableCell>
                        <TableCell align="right" sx={{ color: '#fff' }}> Register Date </TableCell>
                    </TableRow>
                </TableHead>

            </Table>
        </TableContainer>
    );
}