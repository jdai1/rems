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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from "react-hook-form";

export default function CiomsForm() {
    // concomitant & other suspect medications
    const [concomitantMedicationData, setConcomitantMedicationData] = useState([]);
    const [showConcomitantMedicationField, setShowConcomitantMedicationField] = useState(false);
    // relevant diagnostic tests and laboratory data
    const [diagnosticTestData, setDiagnosticTestData] = useState([]);

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

    const { handleSubmit, control, resetField, getValues } = useForm({});
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    const onMedChange = (event) => setShowConcomitantMedicationField(!showConcomitantMedicationField);

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
                            fontWeight: 500
                        }}
                    >
                        Suspect Drug(s) Information (II):
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
                        Relevant Diagnostic Tests and Laboratory Data (IV):
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
                            fontWeight: 500
                        }}
                    >
                        Reaction Information (I):
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="reactionOnset"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl sx={{ mr: '15px' }}>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px',
                                    }}
                                >
                                    Reaction Onset
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
                    <Controller
                        name="eventDescription"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Event Description</FormLabel>
                                <FormGroup>
                                    <FormControlLabel value="fatal" control={<Checkbox onChange={onChange} />} label="Fatal" />
                                    <FormControlLabel value="lifeThreatening" control={<Checkbox onChange={onChange} />} label="Life Threatening" />
                                    <FormControlLabel value="hospitalization" control={<Checkbox onChange={onChange} />} label="Hospitalization" />
                                    <FormControlLabel value="disability" control={<Checkbox onChange={onChange} />} label="Disability" />
                                    <FormControlLabel value="lifeThreatening" control={<Checkbox onChange={onChange} />} label="Congenital anomaly" />
                                    <FormControlLabel value="noneOfTheAbove" control={<Checkbox onChange={onChange} />} label="None of the above" />
                                </FormGroup>
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
                                    If the XXX product was discontinued, specify which reaction(s) listed above resolved?
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
                                    If the XXX drug was restarted, specify which reaction(s) listed above re-occurred?
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
                    <Typography
                        sx={{
                            fontWeight: 500,
                            display: 'block'
                        }}
                    >
                        Manufacturer Information (V):
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="manufacturerName"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Name"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="manufacturerAddress"
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
                <Grid item xs={3}>
                    <Controller
                        name="manufacturerControlNumber"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Control Number"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="dateReceivedByManufacturer"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl sx={{ mr: '15px' }}>
                                <FormLabel
                                    sx={{
                                        mb: '7.5px',
                                    }}
                                >
                                    Date Received
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
                    <Controller
                        name="reportSource"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Report Source</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"Report Source"}
                                >
                                    <FormControlLabel value="study" control={<Radio />} label="Study" />
                                    <FormControlLabel value="healthProfession" control={<Radio />} label="Health Profession" />
                                    <FormControlLabel value="literature" control={<Radio />} label="Literature" />
                                    <FormControlLabel value="other" control={<Radio />} label="Disability" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="reportType"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <FormControl>
                                <FormLabel>Report Type</FormLabel>
                                <RadioGroup
                                    onChange={onChange}
                                    label={"Report Type"}
                                >
                                    <FormControlLabel value="initial" control={<Radio />} label="Initial" />
                                    <FormControlLabel value="followup" control={<Radio />} label="Follow Up" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="addressOfReporter"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Address of Reporter"}
                                fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sx={{ mb: '7.5px' }}>
                    <Controller
                        name="remarks"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextField
                                onChange={onChange}
                                label={"Remarks"}
                                fullWidth
                                multiline
                                rows={4}
                            />
                        )}
                    />
                </Grid>
            </Grid>

            <Button variant="contained" type="Submit">Submit</Button>
        </form>
    )
}