import { TextField } from "@mui/material";
import React from "react";

function StepOne({ Saver, HandleChange }) {
  return (
    <div style={{ textAlign: "center" }}>
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
            HandleChange(e)
        }}
        value={Saver.FirstName}
      />
      <TextField
        id="outlined-basic"
        name="LastName"
        label="Last Name*"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        onChange={(e)=> {
            HandleChange(e)
        }}
        value={Saver.LastName}
      />
      <TextField
        name="Age"
        id="outlined-basic"
        label="Age*"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        value={Saver.Age}
        onChange={(e)=> {
            HandleChange(e)
        }}
      />
            <TextField
        name="Location"
        id="outlined-basic"
        label="Location*"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        value={Saver.Lcation}
        onChange={(e)=> {
            HandleChange(e)
        }}
      />
            <TextField
        name="Date"
        id="outlined-basic"
        label="Date*"
        variant="outlined"
        style={{
          width: "80%",
          margin: "2%",
        }}
        value={Saver.Date}
        onChange={(e)=> {
            HandleChange(e)
        }}
      />
    </div>
  );
}

export default StepOne;
