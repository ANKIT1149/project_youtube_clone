/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Stack } from '@mui/material';
import React from 'react';

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
 <Stack direction='row' justifyContent="ceneter" alignItems="center" width="100%">
      <InfinitySpin color="red" />
 </Stack>
  );
};

export default Loader;