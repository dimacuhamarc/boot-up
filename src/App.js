import { Box } from '@chakra-ui/react';
import './App.css';
import RootLayout from './pages/RootLayout';
import Router from './Router';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Box
        w='100vw'
        h='100vh'
        bgGradient={[
          'linear(to-b, blue.200, teal.500)'
        ]}
      >
        <RootLayout />
        <Router />
      </Box>
    </div>
  );
}

export default App;
