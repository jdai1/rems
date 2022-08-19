import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from "react-hook-form";

export default function PneumoniaForm() {
    const [death, setDeath] = useState(false);
    const [labData, setLabData] = useState([]);

    // show text field
    const [showHistory1, setShowHistory1] = useState(false);
    const [showHistory2, setShowHistory2] = useState(false);
    const [showHistory3, setShowHistory3] = useState(false);

    // concomitant & other suspect medications
    const [concomitantMedicationData, setConcomitantMedicationData] = useState([]);
    const [showConcomitantMedicationField, setShowConcomitantMedicationField] = useState(false);

    const { handleSubmit, control, getValues, resetField } = useForm({
        defaultValues: {
            baselineDate: null,
            baselineLabValue: null,
            boneMarrowHistory: null,
            colonyStimulatingFactors: null,
            concomitantMedicationDescription: null,
            description: null,
            dosage: null,
            dosageChangeDetails: null,
            dosageRouterFrequency: null,
            drugName: null,
            duration: null,
            eventDescription: null,
            eventOutcome: null,
            frequency: null,
            indication: null,
            infectionDescription: null,
            infectionProphylaxis: null,
            lotNumber: null,
            mhDiagnosis: null,
            mhOnset: null,
            pneumoniaEnd: null,
            pneumoniaOnset: null,
            range: null,
            reccurent: null,
            recoveryLabDate: null,
            recoveryLabValue: null,
            route: null,
            serology: null,
            startDate: null,
            status: null,
            stopDate: null,
            tableStartDate: null,
            tableStopDate: null,
            test: null,
            treatmentDescription: null,
            worstLabDate: null,
            worstLabValue: null,
        }
    });

    const drugNameRef = useRef();
    const indicationRef = useRef();
    const dosageRouterFrequencyRef = useRef();
    const tableStartDateRef = useRef();
    const tableStopDateRef = useRef();
    const durationRef = useRef();
    const testRef = useRef();
    const rangeRef = useRef();
    const baselineLabValueRef = useRef();
    const baselineLabDateRef = useRef();
    const worstLabValueRef = useRef();
    const worstLabDateRef = useRef();
    const recoveryLabValueRef = useRef();
    const recoveryLabDateRef = useRef();

    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    const onDeathChange = (event) => setDeath(!death);
    const onHistory1Change = (event) => setShowHistory1(!showHistory1);
    const onHistory2Change = (event) => setShowHistory2(!showHistory2);
    const onHistory3Change = (event) => setShowHistory3(!showHistory3);
    const onConcomitantMedChange = (event) => setShowConcomitantMedicationField(!showConcomitantMedicationField);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2} sx={{ pr: 2 }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontWeight: 500
                        }}
                    >
                        Patient Information (I):
                    </Typography>
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
                        Drug Therapy Information (II):
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
                        Concomitant & Other Suspect Medications (III):
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
                            onChange={onConcomitantMedChange}
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
                        Pneumonia Information (IV):
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Please provide the type and source of pneumonia (e.g. bacterial, fungal, viral):
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
                        name="reccurent"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >Has the patient had a history of recurrent infection?</FormLabel>
                                <RadioGroup
                                    row
                                    onChange={onChange}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    What was the status of the underlying disease (multiple myeloma) at the time of the infection onset?
                                </FormLabel>
                                <TextField
                                    onChange={onChange}
                                    fullWidth
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        name="pneumoniaOnset"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Onset
                                </FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={null}
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
                        name="pneumoniaEnd"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    End
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
                        <FormLabel>Did the patient die as a result of contracting Pneumonia?</FormLabel>
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
                    <Typography
                        sx={{
                            fontWeight: 500
                        }}
                    >
                        Physician Assessment (V):
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Does the patient have any history of bone marrow involvement, bone marrow transplantation, or radio therapy?</FormLabel>
                        <RadioGroup
                            row
                            onChange={onHistory1Change}
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
                        display: showHistory1 ? 'block' : 'none'
                    }}
                >
                    <Controller
                        name="boneMarrowHistory"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (

                            <TextField
                                onChange={onChange}
                                placeholder={"Please provide approximate dates."}
                                multiline
                                rows={3}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="infectionDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Infection Description</FormLabel>
                                <FormGroup row>
                                    <FormControlLabel value="deNovo" control={<Checkbox onChange={onChange} />} label="De novo" />
                                    <FormControlLabel value="recurrent" control={<Checkbox onChange={onChange} />} label="Recurrent" />
                                    <FormControlLabel value="relapse" control={<Checkbox onChange={onChange} />} label="Relapse" />
                                </FormGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Did the patient receive infection prophylaxis?</FormLabel>
                        <RadioGroup
                            row
                            onChange={onHistory2Change}
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
                        display: showHistory2 ? 'block' : 'none'
                    }}
                >
                    <Controller
                        name="infectionProphylaxis"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (

                            <TextField
                                onChange={onChange}
                                placeholder={"Please specify antiobiotic, including doses and dates of treatment."}
                                multiline
                                rows={3}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Did the patient receive colony stimulating factors?</FormLabel>
                        <RadioGroup
                            row
                            onChange={onHistory3Change}
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
                        display: showHistory3 ? 'block' : 'none'
                    }}
                >
                    <Controller
                        name="colonyStimulatingFactors"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (

                            <TextField
                                onChange={onChange}
                                placeholder={"Please specify (including type and dates)."}
                                multiline
                                rows={3}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Test</TableCell>
                                    <TableCell>Range</TableCell>
                                    <TableCell>Baseline Lab Value</TableCell>
                                    <TableCell>Baseline Lab Date</TableCell>
                                    <TableCell>Worst Lab Value</TableCell>
                                    <TableCell>Worst Lab Date</TableCell>
                                    <TableCell>Recovery Lab Value</TableCell>
                                    <TableCell>Recovery Lab Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {labData.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row['test']}</TableCell>
                                        <TableCell>{row['range']}</TableCell>
                                        <TableCell>{row['baselineLabValue']}</TableCell>
                                        <TableCell>{row['baselineLabDate']}</TableCell>
                                        <TableCell>{row['worstLabValue']}</TableCell>
                                        <TableCell>{row['worstLabDate']}</TableCell>
                                        <TableCell>{row['recoveryLabValue']}</TableCell>
                                        <TableCell>{row['recoveryLabDate']}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell scope="row" sx={{ p: 1, mt: 1 }}>
                                        <Controller
                                            name="test"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={testRef}
                                                    onChange={onChange}
                                                    placeholder={"Test"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="range"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={rangeRef}
                                                    onChange={onChange}
                                                    placeholder={"Range"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="baselineLabValue"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={baselineLabValueRef}
                                                    onChange={onChange}
                                                    placeholder={"Baseline Lab Value"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="baselineDate"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={baselineLabDateRef}
                                                    onChange={onChange}
                                                    placeholder={"Baseline Date"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="worstLabValue"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={worstLabValueRef}
                                                    onChange={onChange}
                                                    placeholder={"Worst Lab Value"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="worstLabDate"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={worstLabDateRef}
                                                    onChange={onChange}
                                                    placeholder={"Worst Lab Date"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="recoveryLabValue"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={recoveryLabValueRef}
                                                    onChange={onChange}
                                                    placeholder={"Recovery Lab Value"}
                                                    size="small"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 1 }}>
                                        <Controller
                                            name="recoveryLabDate"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                                <TextField
                                                    inputRef={recoveryLabDateRef}
                                                    onChange={onChange}
                                                    placeholder={"Recovery Lab Date"}
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
                                test: getValues("test"),
                                range: getValues("range"),
                                baselineLabValue: getValues("baselineLabValue"),
                                baselineLabDate: getValues("baselineLabDate"),
                                worstLabValue: getValues("worstLabValue"),
                                worstLabDate: getValues("worstLabDate"),
                                recoveryLabValue: getValues("recoveryLabValue"),
                                recoveryLabDate: getValues("recoveryLabDate"),
                            });
                            setLabData(newData);
                            ["test", "range", "baselineLabValue", "baselineLabDate", "worstLabValue", "worstLabDate", "recoveryLabValue", "recoveryLabDate"].forEach(resetField);
                            testRef.current.value = '';
                            rangeRef.current.value = '';
                            baselineLabValueRef.current.value = '';
                            baselineLabDateRef.current.value = '';
                            worstLabValueRef.current.value = '';
                            worstLabDateRef.current.value = '';
                            recoveryLabValueRef.current.value = '';
                            recoveryLabDateRef.current.value = '';
                        }}
                        sx={{ mb: 2 }}
                    >
                        Add
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="serology"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Provide relevant culture/serology and chest x-ray results with dates.
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
                        name="treatmentDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px'
                                    }}
                                >
                                    Provide treatment and intervention details, given for the patient with pneumonia.
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
                    <Button variant="contained" type="Submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}