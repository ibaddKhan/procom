import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "react-bootstrap/Button";
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
        console.log('Pay button clicked for:', row);
    };

    const handleReject = (row) => {
        console.log('Reject button clicked for:', row);
    };

    const handleViewDetails = (row) => {
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
                                        if (isMobile && ['time', 'date', 'action', 'description'].includes(column.id)) {
                                            return null; // Hide specified columns on mobile
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
                                                if (isMobile && ['time', 'date', 'action', 'description'].includes(column.id)) {
                                                    return null; // Hide specified columns on mobile
                                                }

                                                const value = row[column.id];
                                                const isStatusColumn = column.id === 'status';

                                                return (
                                                    <TableCell key={column.id} align="center" style={{ backgroundColor: isStatusColumn ? getStatusColor(row.status) : 'inherit' }}>
                                                        {isStatusColumn ? (
                                                            <Typography variant="h6" style={{ color: 'white' }}>
                                                                {value}
                                                            </Typography>
                                                        ) : (
                                                            column.id === 'action' && (row.status === 'Pending' || row.status === 'Failed') ? (
                                                                <>
                                                                    <Button variant="success" onClick={() => handlePay(row)} style={{ marginRight: '10px' }}>
                                                                        Pay
                                                                    </Button>
                                                                    <Button variant="danger" onClick={() => handleReject(row)} className="ml-2">
                                                                        Reject
                                                                    </Button>
                                                                </>
                                                            ) : (
                                                                column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value
                                                            )
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                            {isMobile && <TableCell align="center" style={{ minWidth: 100 }}>
                                                <Button className="bg-secondary" onClick={() => handleViewDetails(row)}>
                                                    View
                                                </Button>
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

function getStatusColor(status) {
    switch (status) {
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