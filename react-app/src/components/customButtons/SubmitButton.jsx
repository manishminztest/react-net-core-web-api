import { Button } from '@mui/material';
import React, { memo } from 'react';
import SaveIcon from '@mui/icons-material/Save';

const SubmitButton = () => {
  return (
    <>
      <Button type='submit' variant='contained' color='primary' startIcon={<SaveIcon/>}>Save</Button>
    </>
  )
}

export default memo(SubmitButton);
