import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function CustomTextField() {
    return (
        <TextField
            id="standard-basic"
            label="EMAIL"
            variant="standard"
            className='flex w-full'
            sx={{
                input: { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiInput-underline:before': { borderBottomColor: '#DCC5BD' }, // default
                '& .MuiInput-underline:hover:before': { borderBottomColor: '#DCC5BD' }, // hover
                '& .MuiInput-underline:after': { borderBottomColor: '#DCC5BD' } // focused
            }}
        />

    );
}