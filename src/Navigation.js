import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

import AdbIcon from '@mui/icons-material/Adb';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TodayIcon from '@mui/icons-material/Today';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuizIcon from '@mui/icons-material/Quiz';

import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, View } from '@aws-amplify/ui-react';

const drawerWidth = 200

export default function Navigation() {

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);

    const navigate = useNavigate();
    const theme = useTheme();

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    bgcolor: theme.palette.secondary.light,
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Optima',
                            fontSize: '25px',
                            fontWeight: 900,
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            color: theme.palette.primary.main,
                        }}
                    >
                        REMS Portal
                    </Typography>
                    <Button onClick={logOut}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                </Toolbar>
                <List>
                    <ListItem
                        disablePadding
                        component={Link}
                        to={"/dashboard"}
                        sx={{ color: '#000000' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        component={Link}
                        to={"/surveys"}
                        sx={{ color: '#000000' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <QuizIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Surveys'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        component={Link}
                        to={"/patients"}
                        sx={{ color: '#000000' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Patients'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        component={Link}
                        to={"/calendar"}
                        sx={{ color: '#000000' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <TodayIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Calendar'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        component={Link}
                        to={"/reports"}
                        sx={{ color: '#000000' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Reports'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Outlet />
        </Box>
    );
}