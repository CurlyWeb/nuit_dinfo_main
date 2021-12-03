import { TextField } from '@mui/material'
import React from 'react'

function StepTwo({Boat , ChangeBoat}) {
    return (
        <div  style={{ textAlign: "center" }}>
                  
                  <TextField
        id="outlined-basic"
        label="Name*"
        name="Name"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        onChange={(e)=> {
            ChangeBoat(e)
        }}
        value={Boat.Name}
      />  <TextField
      id="outlined-basic"
      label="State*"
      name="State"
      variant="outlined"
      style={{
        width: "80%",
        margin: "2%",
      }}
      onChange={(e)=> {
        ChangeBoat(e)
      }}
      value={Boat.State}
    />
        </div>
    )
}

export default StepTwo
