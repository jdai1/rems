import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

import { useForm, Controller } from "react-hook-form";

import { signUp, confirmSignUp, signIn, resendConfirmationCode, signOut } from "./authentication";
import Signin from './Signin';
import Signup from './Signup';

const drawerWidth = 200;

export default function Login() {
    return (
        <Paper
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </Paper>
    );
}