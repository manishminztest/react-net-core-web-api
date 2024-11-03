import { Grid, Typography } from '@mui/material';
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant='h1' color='success'>Home</Typography>
      </Grid>
    </>
  )
}

export default HomePage;
