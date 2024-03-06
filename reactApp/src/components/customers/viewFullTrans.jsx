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
    let nav = useNavigate();
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        const storedRow = localStorage.getItem('selectedRow');
        const parsedRow = storedRow ? JSON.parse(storedRow) : null;
        setSelectedRow(parsedRow);
    }, []);

    const handlePay = () => {
        console.log('Pay button clicked for:', selectedRow);
        nav("/customer/Qrscan");
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
                                    {Object.entries(selectedRow).map(([key, value]) => (
                                        <TableRow key={key}>
                                            <TableCell variant="head">{key.replace(/([A-Z])/g, ' $1').trim() + ':'}</TableCell>
                                            <TableCell style={{ backgroundColor: getStatusColor(key, value) }}>{value}</TableCell>
                                        </TableRow>
                                    ))}
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

const getStatusColor = (key, value) => {
    if (key === 'status') {
        switch (value) {
            case 'Pending':
                return '#ffecb3';
            case 'Failed':
                return '#ef9a9a';
            case 'Completed':
                return '#e8f5e9';
            default:
                return 'inherit';
        }
    }
    return 'inherit';
};

export default ViewFullTrans;
