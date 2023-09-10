import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type InputFieldProps = {
    label : string;
    onChange?: (...args: any[]) => any;
}

export default function InputField( props: InputFieldProps ) {
    const {label, onChange} = props

  return (
    <Box
      component="form"
      sx={{
        marginY:'10px'
        // "& > :not(style)": { },
      }}
    //   noValidate
    //   autoComplete="off"
    >
      <TextField label={label} onChange={onChange} color="primary" focused  fullWidth />
    </Box>
  );
}
