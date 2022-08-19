import Button from '@mui/material/Button';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from "react-hook-form";

export default function PatientEnrollmentForm() {
    const { handleSubmit, control } = useForm({});
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"gender"}
                                    row
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="pregnant"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Pregnant</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"Pregnant"}
                                    row
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="dob"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >Date of Birth</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={value}
                                        onChange={onChange}
                                        renderInput={(params) => <TextField {...params} />}
                                        reduceAnimations
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="age"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl
                                sx={{
                                    mt: '30px'
                                }}
                            >
                                <TextField
                                    onChange={onChange}
                                    label={"Age"}
                                    fullWidth
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="weight"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Weight"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="height"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Height"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="race"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: "7.5px"
                                    }}
                                >Race</FormLabel>
                                <Select
                                    label="Race"
                                    onChange={onChange}
                                    fullWidth
                                >
                                    <MenuItem value={"white"}>White</MenuItem>
                                    <MenuItem value={"black"}>Black or African American</MenuItem>
                                    <MenuItem value={"hispanic"}>Hispanic</MenuItem>
                                    <MenuItem value={"native"}>American Indian or Alaska Native</MenuItem>
                                    <MenuItem value={"asian"}>Asian</MenuItem>
                                    <MenuItem value={"pacific"}>Native Hawaiian or Other Pacific Islander</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>

            <Button variant="contained" type="Submit">Submit</Button>
        </form>
    )
}
  // use Controller + useForm to create validation with yum resolver and mui components