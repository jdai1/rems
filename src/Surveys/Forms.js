import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import DeathForm from "./DeathForm";
import GenericForm from "./GenericForm";
import LiverForm from "./LiverForm";
import PneumoniaForm from "./PneumoniaForm";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{ pt: 2, pb: 2, pl: 2, height: '100%', overflow: 'auto' }}
            {...other}
        >
            {children}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Forms() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                height: '100%',
                pt: 2, pb: 2, pl: 2,
            }}
        >
            <Grid container direction="column">
                <Grid item>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Generic Form" {...a11yProps(0)} />
                            <Tab label="Pneumonia Form" {...a11yProps(1)} />
                            <Tab label="Liver Form" {...a11yProps(2)} />
                            <Tab label="Death Form" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item sx={{ flexGrow: 1, height: '1px' }}>
                    <TabPanel value={value} index={0}>
                        <GenericForm />
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <PneumoniaForm />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <LiverForm />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <DeathForm />
                    </TabPanel>
                </Grid>
            </Grid>
        </Paper>
    );
}