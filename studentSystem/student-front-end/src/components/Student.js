import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import {Button} from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px', width:'600px', margin: '20px auto'}
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[student, setStudent] = useState([]);

    const handleClick = (e)=>{
      e.preventDefault();
      const student={name, address}
      console.log(student);
      fetch("http://localhost:8080/student/add", 
      { method:"POST", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify(student)})
        .then(()=>{
        console.log("new student added")
      })
    }

    useEffect(()=>
    {
      fetch("http://localhost:8080/student/getAll")
      .then(response=>response.json())
      .then((result)=>{
        setStudent(result);
      })
    },[])
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

      <Button variant="contained" color="secondary" onClick={handleClick}>Save data</Button>
      
    </Box>
    </Paper>
      <h1>Students List</h1>
    <Paper elevation={3} style={paperStyle}>
      {student.map(student =>  (
        <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
          Id: {student.id}<br/>
          Name: {student.name}<br/>
          Address: {student.address}
        </Paper>
      )

      )}
    </Paper>
    </Container>
  );
}