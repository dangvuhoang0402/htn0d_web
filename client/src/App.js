import React, { useState,useEffect } from 'react';
import UnstyledButtonsSimple from './components/MuiButton'; // adjust the path as needed
import { PaymentTable, ClientTable,CardTable } from './components/Table'; // adjust the path as needed
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  const [showTable, setShowTable] = useState('none');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClickPayment = () => {
    setShowTable('payment');
  };

  const handleClickClient = () => {
    setShowTable('client');
  };

  const handleClickCard = () => {
    setShowTable('card');
  }
  useEffect(() => {
    fetch('http://localhost:3003/payment')
      .then((response) => {
        if (!response.ok) {
          return response.json().then((json) => {
            throw new Error(json.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data...
      })
      .catch((error) => {
        if (error.message.includes('No token provided')) {
          setIsLoggedIn(false);
        }
      });
  }, []);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#f5f5dc', color: '#000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
            <UnstyledButtonsSimple style={{ height: '100%' }} onClickPayment={handleClickPayment} onClickClient={handleClickClient} onClickCard={handleClickCard} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Stack spacing={2} direction="column">
        {showTable === 'payment' ? <PaymentTable /> : showTable === 'client' ? <ClientTable /> : showTable === 'card' ? <CardTable /> : null}
      </Stack>
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: 'primary.main', color: 'white', p: 2 }}>
        <Typography variant="body1" align="center">
          © 2024 Nhóm 4
        </Typography>
      </Box>
    </div>
  );
}
export default App;