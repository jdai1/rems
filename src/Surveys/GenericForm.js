import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from "react-hook-form";

export default function GenericForm() {
    // concomitant & other suspect medications
    const [concomitantMedicationData, setConcomitantMedicationData] = useState([]);
    const [showConcomitantMedicationField, setShowConcomitantMedicationField] = useState(false);
    // relevant diagnostic tests and laboratory data
    const [diagnosticTestData, setDiagnosticTestData] = useState([]);
    // death (AE)
    const [death, setDeath] = useState(false);

    const { handleSubmit, control, resetField, getValues } = useForm({
        defaultValues: {
            aeEnd: null,
            aeOnset: null,
            age: null,
            dates: null,
            discontinuedDescription: null,
            dob: null,
            dosage: null,
            dosageChangeDetails: null,
            dosageRouterFrequency: null,
            drugName: null,
            duration: null,
            eventDescription: null,
            eventOutcome: null,
            frequency: null,
            gender: null,
            height: null,
            indication: null,
            lotNumber: null,
            medicalHistory: null,
            normalRange: null,
            physicianAssessment: null,
            pregnant: null,
            race: null,
            restartedDescription: null,
            results: null,
            route: null,
            startDate: null,
            stopDate: null,
            concomitantMedicationDescription: null,
            tableStartDate: null,
            tableStopDate: null,
            tests: null,
            treatmentAndOutcome: null,
            weight: null,
        }
    });

    const drugNameRef = useRef();
    const indicationRef = useRef();
    const dosageRouterFrequencyRef = useRef();
    const tableStartDateRef = useRef();
    const tableStopDateRef = useRef();
    const durationRef = useRef();
    const testsRef = useRef();
    const datesRef = useRef();
    const resultsRef = useRef();
    const normalRangeRef = useRef();

    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    const onMedChange = (event) => setShowConcomitantMedicationField(!showConcomitantMedicationField);
    const onDeathChange = (event) => setDeath(!death);
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2} sx={{ pr: 2 }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500
                        }}
                    >
                        Patient Information:
                    </Typography>
                </Grid>
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
                <Grid item xs={12}>
                    <Controller
                        name="medicalHistory"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >Medical History</FormLabel>
                                <TextField
                                    onChange={onChange}
                                    placeholder={"Include pre-existing medical conditions/risk factors, (eg allergies, smoking/alcohol use, hepatic/renal/cardiac dysfunction, etc.)"}
                                    multiline
                                    rows={4}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            display: 'block'
                        }}
                    >
                        Drug Therapy Information:
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 200,
                        }}
                    >
                        Please complete with dates/times the product was stopped and restarted if applicable.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="indication"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                sx={{ mr: '15px' }}
                                onChange={onChange}
                                label={"Indication"}
                            />
                        )}
                    />
                    <Controller
                        name="lotNumber"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Lot Number"}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="startDate"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl sx={{ mr: '15px' }}>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px',
                                    }}
                                >
                                    Start Date
                                </FormLabel>
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
                    <Controller
                        name="stopDate"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Stop Date
                                </FormLabel>
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
                <Grid item xs={2.75}>
                    <Controller
                        name="dosage"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Dosage"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={2.75}>
                    <Controller
                        name="route"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Route"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={2.75}>
                    <Controller
                        name="frequency"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Frequency"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={2.75}>
                    <Controller
                        name="duration"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Duration of Therapy"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="dosageChangeDetails"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (

                            <TextField
                                onChange={onChange}
                                label={"If dosage changed, please provide details"}
                                multiline
                                rows={2}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            display: 'block'
                        }}
                    >
                        Concomitant & Other Suspect Medications:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Drug Name</TableCell>
                                    <TableCell>Indication</TableCell>
                                    <TableCell>Dosage/Route/Frequency</TableCell>
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>Stop Date</TableCell>
                                    <TableCell>Duration</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {concomitantMedicationData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row['drugName']}</TableCell>
                                        <TableCell>{row['indication']}</TableCell>
                                        <TableCell>{row['dosageRouteFrequency']}</TableCell>
                                        <TableCell>{row['tableStartDate']}</TableCell>
                                        <TableCell>{row['tableStopDate']}</TableCell>
                                        <TableCell>{row['duration']}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell scope="row" sx={{ p: 1, mt: 1 }}>
                                        <Controller
                                            name="drugName"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={drugNameRef}
                                                    onChange={onChange}
                                                    placeholder={"Drug Name"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="indication"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={indicationRef}
                                                    onChange={onChange}
                                                    placeholder={"Indication"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="dosageRouterFrequency"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={dosageRouterFrequencyRef}
                                                    onChange={onChange}
                                                    placeholder={"Dosage/Router/Frequency"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="tableStartDate"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={tableStartDateRef}
                                                    onChange={onChange}
                                                    placeholder={"Start Date"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="tableStopDate"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={tableStopDateRef}
                                                    onChange={onChange}
                                                    placeholder={"Stop Date"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="duration"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={durationRef}
                                                    onChange={onChange}
                                                    placeholder={"Duration"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sx={{ ml: 1 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            const newData = concomitantMedicationData.slice();
                            newData.push({
                                drugName: getValues("drugName"),
                                indication: getValues("indication"),
                                dosageRouteFrequency: getValues("dosageRouterFrequency"),
                                tableStartDate: getValues("tableStartDate"),
                                tableStopDate: getValues("tableStopDate"),
                                duration: getValues("duration")
                            });
                            setConcomitantMedicationData(newData);
                            ["drugName", "indication", "dosageRouterFrequency", "tableStartDate", "tableStopDate", "duration"].forEach(resetField);
                            drugNameRef.current.value = '';
                            indicationRef.current.value = '';
                            dosageRouterFrequencyRef.current.value = '';
                            tableStartDateRef.current.value = '';
                            tableStopDateRef.current.value = '';
                            durationRef.current.value = '';
                        }}
                        sx={{ mb: 2 }}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Did any of the above concomitant medications contribute to the adverse event?</FormLabel>
                        <RadioGroup
                            row
                            defaultValue="no"
                            onChange={onMedChange}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: showConcomitantMedicationField ? 'block' : 'none'
                    }}
                >
                    <Controller
                        name="concomitantMedicationDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (

                            <TextField
                                onChange={onChange}
                                placeholder={"Yes, Drug# (above) ____ contributed to Adverse Event # (in the AE Information table below)___"}
                                multiline
                                rows={3}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            display: 'block'
                        }}
                    >
                        Relevant Diagnostic Tests and Laboratory Data:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Test(s)</TableCell>
                                    <TableCell>Date(s)</TableCell>
                                    <TableCell>Results</TableCell>
                                    <TableCell>Normal Range</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {diagnosticTestData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row['tests']}</TableCell>
                                        <TableCell>{row['dates']}</TableCell>
                                        <TableCell>{row['results']}</TableCell>
                                        <TableCell>{row['normalRange']}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell scope="row" sx={{ p: 1, mt: 1 }}>
                                        <Controller
                                            name="tests"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={testsRef}
                                                    onChange={onChange}
                                                    placeholder={"Test(s)"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="dates"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={datesRef}
                                                    onChange={onChange}
                                                    placeholder={"Date(s)"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="results"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={resultsRef}
                                                    onChange={onChange}
                                                    placeholder={"Results"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="normalRange"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={normalRangeRef}
                                                    onChange={onChange}
                                                    placeholder={"Normal Range (Min-Max)"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sx={{ ml: 1 }}>
                    {/* potential future task: require fields to be filled out before adding or add feature to edit or delete fields */}
                    <Button
                        variant="contained"
                        onClick={() => {
                            const newData = diagnosticTestData.slice();
                            newData.push({
                                tests: getValues("tests"),
                                dates: getValues("dates"),
                                results: getValues("results"),
                                normalRange: getValues("normalRange"),
                            });
                            setDiagnosticTestData(newData);
                            ["tests", "dates", "results", "normalRange"].forEach(resetField);
                            testsRef.current.value = '';
                            datesRef.current.value = '';
                            resultsRef.current.value = '';
                            normalRangeRef.current.value = '';
                        }}
                        sx={{ mb: 2 }}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            display: 'block'
                        }}
                    >
                        Adverse Event Information:
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        name="aeOnset"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Event Onsent
                                </FormLabel>
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
                <Grid item xs={3}>
                    <Controller
                        name="aeEnd"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    End date
                                </FormLabel>
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
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Did the patient die as a result of the adverse event in question?</FormLabel>
                        <RadioGroup
                            onChange={onDeathChange}
                            label={"Death"}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="eventDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Event Description</FormLabel>
                                <FormGroup>
                                    <FormControlLabel value="fatal" disabled={death} control={<Checkbox onChange={onChange} />} label="Fatal" />
                                    <FormControlLabel value="hospotalizatioon" disabled={death} control={<Checkbox onChange={onChange} />} label="Hospitalization" />
                                    <FormControlLabel value="permanent" disabled={death} control={<Checkbox onChange={onChange} />} label="Permanent" />
                                    <FormControlLabel value="disability" disabled={death} control={<Checkbox onChange={onChange} />} label="Disability" />
                                    <FormControlLabel value="congenitalAnomaly" disabled={death} control={<Checkbox onChange={onChange} />} label="Congenital anomaly" />
                                    <FormControlLabel value="noneOfTheAbove" disabled={death} control={<Checkbox onChange={onChange} />} label="None of the above" />
                                </FormGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="eventOutcome"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Event Outcome</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"Event Outcome"}
                                    row
                                >
                                    <FormControlLabel value="resolved" disabled={death} control={<Radio />} label="Resolved" />
                                    <FormControlLabel value="resolving" disabled={death} control={<Radio />} label="Resolving" />
                                    <FormControlLabel value="recoveredWSequelae" disabled={death} control={<Radio />} label="Recovered w/ sequelae" />
                                    <FormControlLabel value="notRecovered" disabled={death} control={<Radio />} label="Not recovered" />
                                    <FormControlLabel value="unknown" disabled={death} control={<Radio />} label="Unknown" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="physicianAssessment"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Physician Assessment</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"Physician Assessment"}
                                    row
                                >
                                    <FormControlLabel value="confirmed" control={<Radio />} label="Confirmed" />
                                    <FormControlLabel value="possible" control={<Radio />} label="Possible" />
                                    <FormControlLabel value="probable" control={<Radio />} label="Probable" />
                                    <FormControlLabel value="unrelated" control={<Radio />} label="Unrelated" />
                                    <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="treatmentAndOutcome"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Describe the event(s) in space below, include treatment provided & outcome if applicable.
                                </FormLabel>
                                <TextField
                                    onChange={onChange}
                                    multiline
                                    rows={3}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="discontinuedDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    If the XXX product was discontinued, specify which event(s) listed above resolved?
                                </FormLabel>
                                <TextField
                                    onChange={onChange}
                                    fullWidth
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="restartedDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    If the XXX drug was restarted, specify which event(s) listed above re-occurred?
                                </FormLabel>
                                <TextField
                                    onChange={onChange}
                                    fullWidth
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" type="Submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}