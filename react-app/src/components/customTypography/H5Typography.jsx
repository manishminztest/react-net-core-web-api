import { Typography } from '@mui/material';
import React, { memo } from 'react'

const H5Typography = ({title}) => {
  return (
    <>
      <Typography variant='h5' fontWeight={'bold'} color='blue'>
        {title}
      </Typography>
    </>
  )
}

export default memo(H5Typography);
