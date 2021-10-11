import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Main from './Main';
import './App.css';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
