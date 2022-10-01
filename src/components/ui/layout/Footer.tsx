import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { getAppVersion } from 'lib/config';

const Footer = () => {
  return (
    <Paper
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'transparent',
        boxShadow: 'none',
        transition: 'none',
        py: { xs: 1, md: 2 },
      }}
    >
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>version {getAppVersion()}</Typography>
    </Paper>
  );
};

export default Footer;
