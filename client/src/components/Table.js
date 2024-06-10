import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function PaymentTable() {
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem('token');
  React.useEffect(() => {
    fetch('http://localhost:3003/payment', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Client Card</StyledTableCell>
            <StyledTableCell>Merchant Card</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Reason</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell>{item._id}</StyledTableCell>
              <StyledTableCell>{item.ClientCard.CardUid}</StyledTableCell>
              <StyledTableCell>{item.MerchantCard.CardUid}</StyledTableCell>
              <StyledTableCell>{item.Date}</StyledTableCell>
              <StyledTableCell>{item.Status}</StyledTableCell>
              <StyledTableCell>{item.Amount}</StyledTableCell>
              <StyledTableCell>{item.Reason}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function ClientTable() {
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem('token');
  React.useEffect(() => {
    fetch('http://localhost:3003/client', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell>{item._id}</StyledTableCell>
              <StyledTableCell>{item.ClientName}</StyledTableCell>
              <StyledTableCell>{item.Gender}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function CardTable(){
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem('token');
  React.useEffect(() => {
    fetch('http://localhost:3003/card', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Client</StyledTableCell>
            <StyledTableCell>Lock</StyledTableCell>
            <StyledTableCell>CardUID</StyledTableCell>
            <StyledTableCell>Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell>{item._id}</StyledTableCell>
              <StyledTableCell>{item.Client.ClientName}</StyledTableCell>
              <StyledTableCell>{item.Lock? 'Yes': 'No'}</StyledTableCell>
              <StyledTableCell>{item.CardUid}</StyledTableCell>
              <StyledTableCell>{item.Balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}