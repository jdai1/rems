import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navigation from './Navigation';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Surveys from './Surveys/Surveys';

import { Authenticator } from '@aws-amplify/ui-react';
import Login from './Auth/Login';
import Gated from './Auth/Gated';


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
            <Authenticator.Provider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Navigation />}>
                            <Route
                                path="dashboard"
                                element={
                                    <Gated>
                                        <Dashboard />
                                    </Gated>
                                }
                            />
                            <Route
                                path="surveys"
                                element={
                                    <Gated>
                                        <Surveys />
                                    </Gated>
                                }
                            />
                            <Route
                                path="patients"
                                element={
                                    <Gated>
                                        <Patients />
                                    </Gated>
                                }
                            />
                            <Route
                                path="calendar"
                                element={
                                    <Gated>
                                        <Calendar />
                                    </Gated>
                                }
                            />
                            <Route
                                path="reports"
                                element={
                                    <Gated>
                                        <Reports />
                                    </Gated>
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Authenticator.Provider>
        </ThemeProvider>
    );
}

export default App;