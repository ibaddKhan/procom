import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Card, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const columns = [
    { id: 'accountNo', label: 'Account No', minWidth: 100 },
    { id: 'merchantNo', label: 'Merchant No', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'time', label: 'Time', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];


const rows = [
    {
        accountNo: "1234567890",
        merchantNo: "M001",
        status: "Completed",
        description: "Payment to ABC Corp",
        time: "10:45 AM",
        date: "2024-03-07",
        amount: 100.00,
    },
    {
        accountNo: "0987654321",
        merchantNo: "M002",
        status: "Pending",
        description: "Payment to XYZ Inc",
        time: "02:30 PM",
        date: "2024-03-06",
        amount: 250.50,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
    },
    {
        accountNo: "1122334455",
        merchantNo: "M003",
        status: "Failed",
        description: "Payment to DEF Ltd",
        time: "11:00 AM",
        date: "2024-03-05",
        amount: 75.25,
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
export default function PaymentList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handlePay = (row) => {
        // Add your logic for handling the "Pay" action here
        console.log('Pay button clicked for:', row);
    };

    const handleReject = (row) => {
        // Add your logic for handling the "Reject" action here
        console.log('Reject button clicked for:', row);
    };

    const handleViewDetails = (row) => {
        // Add your logic for handling the "View Details" action here
        console.log('View Details button clicked for:', row);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card sx={{ width: "100%", overflow: 'auto' }}>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => {
                                        if (isMobile && ['date', 'time', 'description'].includes(column.id)) {
                                            return null; // Hide the heading on mobile
                                        }
                                        return (
                                            <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                                                <Typography variant="h6">{column.label}</Typography>
                                            </TableCell>
                                        );
                                    })}
                                    {isMobile && <TableCell align="center" style={{ minWidth: 100 }}>
                                        <Typography variant="h6">View</Typography>
                                    </TableCell>}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, rowIndex) => (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={rowIndex}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                if (isMobile && ['date', 'time', 'description'].includes(column.id)) {
                                                    return null; // Hide the columns on mobile
                                                }
                                                return (
                                                    <TableCell key={column.id} align="center">
                                                        {column.id === 'action' && (row.status === 'Pending' || row.status === 'Failed') ? (
                                                            <>
                                                                <button onClick={() => handlePay(row)}>Pay</button>
                                                                <button onClick={() => handleReject(row)}>Reject</button>
                                                            </>
                                                        ) : (
                                                            column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                            {isMobile && <TableCell align="center" style={{ minWidth: 100 }}>
                                                <button onClick={() => handleViewDetails(row)}>View Details</button>
                                            </TableCell>}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}