import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";

// All Customers Data
let customersData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    registerDate: "2024-03-07",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    registerDate: "2024-03-07",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    registerDate: "2024-03-07",
  },
  {
    name: "Bob Williams",
    email: "bob.williams@example.com",
    phone: "333-444-5555",
    registerDate: "2024-03-07",
  },
  {
    name: "Eva Davis",
    email: "eva.davis@example.com",
    phone: "999-888-7777",
    registerDate: "2024-03-07",
  },
];

export default function BasicTable() {
  return (
    <>
      <TableContainer>
        <Table component={Paper} sx={{}} aria-label="simple table">
          <TableBody>
            {customersData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell> {data.name} </TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phone} </TableCell>
                <TableCell align="right">{data.registerDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
