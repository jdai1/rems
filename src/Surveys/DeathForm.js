import * as React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";

import { useForm, Controller } from "react-hook-form";

export default function DeathForm() {
    const { handleSubmit, control } = useForm({});
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2}>
                <Grid item xs={5.5}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"First Name"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={5.5}>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Last Name"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Controller
                        name="mInitial"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"M. Initial"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Address"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        name="city"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"City"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                {/* Maybe change to dropdown menu w/ states */}
                <Grid item xs={6}>
                    <Controller
                        name="state"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"State"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controller
                        name="zipCode"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Zip Code"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Button variant="contained" type="Submit">Submit</Button>
        </form>
    )
}