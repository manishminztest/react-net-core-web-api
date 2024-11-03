import { Button } from '@mui/material';
import React from 'react';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const ResetButton = () => {
  return (
    <>
      <Button type='reset' variant='contained' color='secondary' startIcon={<RotateLeftIcon/>}>Reset</Button>
    </>
  )
}

export default ResetButton
