import React from 'react'
import { Button, Typography } from '@mui/material';


const myButton = ({value}) => {
  return (
    <Button variant="contained" color="primary">
      {value}
    </Button>
  )
}

export default myButton