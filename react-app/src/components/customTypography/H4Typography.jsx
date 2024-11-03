import { Typography } from '@mui/material';
import React, { memo } from 'react'

const H5Typography = ({title}) => {
  return (
    <>
      <Typography variant='h4' fontWeight={'bold'} color='blue'>
        {title}
      </Typography>
    </>
  )
}

export default memo(H5Typography);
