import React from "react";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Sidebar from "./Sidebar";
import Forms from "./Forms";

const drawerWidth = 200;
const toolbarHeight = 64;

export default function Patients() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 2, ml: drawerWidth + 'px',
                    bgcolor: theme.palette.secondary.main,
                    height: '100vh',
                }}
            >

                <Grid
                    container
                    sx={{
                        pt: toolbarHeight + 'px',
                        height: '100%',
                    }}
                >
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                bgcolor: theme.palette.secondary.light,
                                height: '100%',
                                mr: '15px',
                            }}
                        >
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                bgcolor: theme.palette.secondary.light,
                                height: '100%',
                            }}
                        >
                            <Forms />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

