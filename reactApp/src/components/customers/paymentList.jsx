import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function PaymentList() {
    const transactionsArr = [
        {
            accountNo: "1234567890",
            merchantNo: "M001",
            status: "Completed",
            description: "Payment to ABC Corp",
            time: "10:45 AM",
            date: "2024-03-07",
            amount: 100.00,
            action: "View"
        },
        {
            accountNo: "0987654321",
            merchantNo: "M002",
            status: "Pending",
            description: "Payment to XYZ Inc",
            time: "02:30 PM",
            date: "2024-03-06",
            amount: 250.50,
            action: "View"
        },
        {
            accountNo: "1122334455",
            merchantNo: "M003",
            status: "Failed",
            description: "Payment to DEF Ltd",
            time: "11:00 AM",
            date: "2024-03-05",
            amount: 75.25,
            action: "Retry"
        },
        {
            accountNo: "5566778899",
            merchantNo: "M004",
            status: "Completed",
            description: "Payment to GHI LLC",
            time: "03:45 PM",
            date: "2024-03-04",
            amount: 150.75,
            action: "View"
        },
        {
            accountNo: "12344321",
            merchantNo: "M005",
            status: "Completed",
            description: "Subscription to JKL Services",
            time: "09:15 AM",
            date: "2024-03-03",
            amount: 99.99,
            action: "View"
        }
    ];

    return (
        <Box >
            <Container maxWidth="xl">
                <Box maxHeight="500px">
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }}>

                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography variant="h6">Account No</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Merchant No</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Status</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Description</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Time</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Date</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Amount</Typography></TableCell>
                                    <TableCell><Typography variant="h6">Action</Typography></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {transactionsArr.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell><Typography variant="body2">{item.accountNo}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.merchantNo}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.status}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.description}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.time}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.date}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.amount}</Typography></TableCell>
                                        <TableCell><Typography variant="body2">{item.action}</Typography></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
}
