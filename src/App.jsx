import React from 'react';
import NavBar from './Components/NavBar';
import MainPage from './Components/Main/MainPage';
import { Container } from '@mui/material';

function App() {

  return (
    <>
      <Container sx={{width:'85%'}}>
        <NavBar></NavBar>
        <MainPage></MainPage>
      </Container>
    </>
  )
}

export default App
