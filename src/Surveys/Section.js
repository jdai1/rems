import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function Section({ label, data }) {
    return (
        <>
            <Typography
                variant="h6"
                sx={{
                    fontSize: 16,
                    fontWeight: 100,
                }}
                noWrap
            >
                {label}
            </Typography>
            <Typography>
                {data}
            </Typography>
        </>
    );
}