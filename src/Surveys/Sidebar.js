import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Section from "./Section";

const patients = [
    { label: "00000" },
    { label: "00001" },
    { label: "00002" },
    { label: "00003" },
    { label: "00004" },
    { label: "00006" },
    { label: "00005" },
    { label: "00007" },
    { label: "00008" },
    { label: "00009" },
]

export default function Sidebar() {
    const [patient, setPatient] = useState();

    const onChange = (e, v) => setPatient(v["label"]);

    return (
        <Paper
            sx={{
                display: 'flex',
                height: '100%',
                p: 2,
            }}
        >
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={patients}
                        sx={{ flexGrow: 1 }}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} label="Patient" />}
                    />
                </Grid>
                <Grid item>
                    <Section label={"Name:"} data={"John Doe"} />
                </Grid>
                <Grid item>
                    <Section label={"Sex:"} data={"Male"} />
                </Grid>
                <Grid item>
                    <Section label={"DOB:"} data={"05/01/1994"} />
                </Grid>
                <Grid item>
                    <Section label={"Medication:"} data={"Lenalidomide 5mg daily, every 21 days"} />
                </Grid>
                <Grid item>
                    <Section label={"Disease:"} data={"Multiple myeloma"} />
                </Grid>
                <Grid item>
                    <Section label={"Description:"} data={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."} />
                </Grid>
            </Grid>
        </Paper>
    );
}