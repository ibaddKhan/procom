import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const ViewFullTrans = () => {
    let nav = useNavigate()
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        const storedRow = localStorage.getItem('selectedRow');
        const parsedRow = storedRow ? JSON.parse(storedRow) : null;
        setSelectedRow(parsedRow);
    }, []);

    const handlePay = () => {
        console.log('Pay button clicked for:', selectedRow);
        nav("/customer/Qrscan")
    };

    const handleReject = () => {
        console.log('Reject button clicked for:', selectedRow);
    };

    return (
        <>
            <Typography className="text-center" variant="h4" component="div">
                Full Transaction Details
            </Typography>
            <Card variant="outlined" sx={{ maxWidth: 800, margin: 'auto', marginTop: 10 }}>
                <CardContent>
                    {selectedRow ? (
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell variant="head">Account No:</TableCell>
                                        <TableCell>{selectedRow.accountNo}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Merchant No:</TableCell>
                                        <TableCell>{selectedRow.merchantNo}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Status:</TableCell>
                                        <TableCell>{selectedRow.status}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Time:</TableCell>
                                        <TableCell>{selectedRow.time}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Date:</TableCell>
                                        <TableCell>{selectedRow.date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Description:</TableCell>
                                        <TableCell>{selectedRow.description}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell variant="head">Amount:</TableCell>
                                        <TableCell>{selectedRow.amount}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Button variant="contained" onClick={handlePay} style={{ backgroundColor: '#4caf50', marginRight: '10px', marginTop: '10px' }}>
                                Pay
                            </Button>
                            <Button variant="contained" onClick={handleReject} style={{ marginTop: '10px', backgroundColor: '#ef5350' }}>
                                Reject
                            </Button>
                        </TableContainer>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            No transaction selected.
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </>
    );
};

export default ViewFullTrans;
