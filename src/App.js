import React from 'react';
import RootLayout from './layouts/RootLayout';
import Router from './Router';
import { Box } from '@chakra-ui/react';
import './App.scss';


function App() {
  return (
    <Box
      className='App'
      w='100vw'
      h='auto'
      bgGradient={[
        'linear(to-b, blue.300, whiteAlpha.400)'
      ]}
    >
      <RootLayout>
        <Router />
      </RootLayout>
    </Box>
  );
}

export default App;
