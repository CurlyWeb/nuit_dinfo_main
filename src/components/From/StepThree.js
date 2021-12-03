import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

function StepThree({SavedUsers , ChangesUsers , ChangeUSERS}) {
    const [newUser , setNewUser] = React.useState({
        FirstName : "",
        LastName :"",
        Age :"",
        Length : "",
        Taille :"",
        State:""
    })
    return (
        <div 
        style={{ textAlign: "center" }}
        >     
        {SavedUsers.map((user ,index) => {
            return <Grid key={index} style={{
            border :"1px solid #C6E2FF            "
            }} container >
                <Grid item xs={12}  > <h1 style={{
                    fontSize :"20px",
                    marginTop :"auto   "
                }} >First Name : {user.FirstName}  </h1> </Grid>
                <Grid item xs={12} ><h1 style={{
                    fontSize :"20px"
                }} > Last Name :{user.LastName} </h1>  </Grid>

                <Grid item xs={12} ><h1 style={{
                    fontSize :"20px"
                }} > Age  : {user.Age} </h1> </Grid>
                <Grid> <Button onClick={()=> {
                    let newData = []
                    SavedUsers.map((user , key) =>{
                        if(key !== index){
                            newData.push(user)
                        }
                    })
                    ChangeUSERS(newData)

                }} > Delete </Button> </Grid>
            </Grid>
        })}
         <TextField
        id="outlined-basic"
        label="First Name*"
        name="FirstName"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        onChange={(e)=> {
            setNewUser({...newUser , FirstName: e.target.value})
        }}
        value={newUser.FirstName}
      />      <TextField
      id="outlined-basic"
      label="Last Name*"
      name="FirstName"
      variant="outlined"
      style={{
        width: "80%",
        margin: "2%",
      }}
      onChange={(e)=> {
        setNewUser({...newUser , LastName: e.target.value})
    }}
      value={newUser.LastName}
    />
    <TextField
      id="outlined-basic"
      label="Last Name*"
      name="FirstName"
      variant="outlined"
      style={{
        width: "80%",
        margin: "2%",
      }}
      onChange={(e)=> {
        setNewUser({...newUser , Age: e.target.value})
    }}
      value={newUser.Age}
    />
      <Button
      onClick={()=> {
        ChangesUsers(newUser)
        console.log(SavedUsers)
        setNewUser({
            FirstName : "",
            LastName :"",
            Age :"",
            Length : "",
            Taille :"",
            State:""
        })
      }}
      > Create New User </Button>      
        </div>
    )
}

export default StepThree
