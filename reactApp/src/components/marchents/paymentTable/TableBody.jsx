import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import { TablePagination } from '@mui/base';


// Payment History Data
const paymentData = [
    {
        name: "John Doe",
        bankName: "ABC Bank",
        accountNo: "1234567890",
        date: "2024-01-02",
        amount: 1000,
        status: 'success'
    },
    {
        name: "Jane Smith",
        bankName: "XYZ Bank",
        accountNo: "0987654321",
        date: "2020-02-07",
        amount: 1500,
        status: 'rejected'
    },
    {
        name: "Alice Johnson",
        bankName: "PQR Bank",
        accountNo: "1112233445",
        date: "2021-05-27",
        amount: 1200,
        status: 'pending'
    },
    {
        name: "Bob Williams",
        bankName: "LMN Bank",
        accountNo: "5555666677",
        date: "2023-08-19",
        amount: 800,
        status: 'success'
    },
    {
        name: "Eva Davis",
        bankName: "DEF Bank",
        accountNo: "9876543210",
        date: "2022-03-11",
        amount: 2000,
        status: 'success'
    },
];



export default function BasicTable() {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody>
                        {paymentData.map((data, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={300}> {data.name}  </TableCell>
                                <TableCell width={300}>{data.accountNo}</TableCell>
                                <TableCell width={200}>{data.amount} PKR </TableCell>
                                <TableCell width={250}>{data.bankName}</TableCell>
                                <TableCell >{data.date}</TableCell>
                                <TableCell align="right"> <Chip label={data.status} color={data.status === 'success' ? 'success' : data.status === 'pending' ? 'warning' : 'error'} variant="outlined" /> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

        </>

    );
}