import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { useState } from 'react';

export default function Student() {
    const paperStyle={padding:'50px', width:'600px', margin: '20px auto'}
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: 'blue'}}>Add Student Information</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student Name: " variant="standard" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="Student Address: " variant="standard" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
    </Box>
    </Paper>
    </Container>
  );
}