import { Box, TextField, Typography } from '@mui/material'
import React, { memo } from 'react'

const RequiredTextField = ({ type, label, name, value, onChange, valid = false, message = " " }) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={1}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
          <Typography variant='body1' fontWeight={'bold'} color='primary' display={'flex'} justifyContent={'flex-start'}>{label}</Typography>
          {
            valid &&
            <Typography variant='body1' fontWeight={'bold'} color='error' display={'flex'} justifyContent={'flex-end'}>{message}</Typography>

          }
        </Box>
        <TextField
          fullWidth
          size='small'
          type={type}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          sx={{ background: 'white' }}
          error={!!valid}
        />
      </Box>
    </>
  )
}

export default memo(RequiredTextField);
