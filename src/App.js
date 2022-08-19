import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navigation from './Navigation';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Surveys from './Surveys/Surveys';
import Login from './Login/Login';


const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#fafafa",
      light: "#ffffff",
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigation />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="surveys" element={<Surveys />} />
            <Route path="patients" element={<Patients />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;